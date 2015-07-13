'use strict';

import { EventEmitter2 } from 'eventemitter2';
import _ from 'lodash';
import queue from 'queue';
import Ractive from 'ractive';
import { FiresyncBinding } from './firesyncBinding.js'
import * as constants from './constants.js';

/**
 * FirebaseRef object
 * @external FirebaseRef
 * @see {@link https://www.firebase.com/docs/web/api/firebase/child.html}
 */
 
 /**
  * RactiveJs object
  * @external RactiveJs
  * @see {@link http://docs.ractivejs.org/latest/get-started}
  */

/**
 * @class FiresyncBase
 * @classdesc Base class for all Firesync objects. Any change made to this object will
 * affect the remote data and any change made on the remote data will affect this object.
 * Cannot be accessed directly
 * @private
 * @fires FiresyncBase#loaded
 * @fires FiresyncBase#changed
 * @fires FiresyncBase#synced
 * @param {FirebaseRef} Ref The ref to which to attach the object to.
 */
class FiresyncBase extends EventEmitter2 {
    constructor(ref) {
        super();

        this.$$ = {};
        this.$$.ref = ref;
        this.$$.loaded = false;
        this.$$.bindings = [];


        this.$$.FILTERED_PROPERTIES = new Set(['$$', '_events', 'newListener', 'event', 'iterator']);

        let firebaseBinding = this._attach();
        this._attachBindings(firebaseBinding);
    }

    /**
     * Indicates whether the object has loaded its data from Firebase.
     * @returns {boolean}
     */
    loaded() {
        return this.$$.loaded;
    }

    /**
     * Returns the ref set in the constructor
     * @returns {FirebaseRef}
     */
    ref() {
        return this.$$.ref;
    }

    /**
     * Detaches from the subscribed Firebase and DOM events. Must be called
     * if the object will no longer be used.
     */
    detach() {
        this.$$.bindings.forEach((binding) => binding.detach());
        this.$$.bindings = [];
    }

    /**
     * Binds to DOM templates using {@link RactiveJs}. The settings are passed directly
     * to {@link RactiveJs}.
     * @param {Object} settings - The settings passed to {@link RactiveJs}. Refer to the
     * {@link RactiveJs} docs for more details
     * @returns {FiresyncBase} The current instance.
     * @example new (FiresyncObject|FiresyncArray).bindTo({ el: 'body', template: '<input value={{value}}/>' })
     */
    bindTo(settings) {
        _.extend(settings, {
            data: this
        });

        let ractive = new Ractive(settings);
        let reactiveListeners = new Map();

        let domBinding = new FiresyncBinding(constants.BINDING_TYPE.DOM, {ractive, settings}, this);
        domBinding.updateLocal((property, value) => {
            return new Promise((resolve) => {
                if (ractive.get(property) === value) {
                    return resolve();
                }
                
                if (this[property] === value) {
                    //we need to fire the bindings ourselves since the 
                    //Object.observe callback will not be invoked
                    
                    this._updateBindings({
                        property,
                        value,
                        type: constants.CHANGE_TYPE.UPDATE
                    }, 
                    constants.CHANGE_ORIGIN.LOCAL, 
                    constants.BINDING_TARGET.DOM,
                    true);
                } else {
                    this[property] = value;    
                }
                
                resolve();
            });
        });
            
        domBinding.updateForeign((property, value) => {
            return new Promise((resolve) => {
                ractive.set(property, value);
                resolve();
            })
        });
        
        this._addBinding(domBinding);
        return this;
    }

    _addBinding(binding) {
        this.$$.bindings.push(binding);
        return binding;
    }

    _attachBindings(binding) {
        throw new Error('_attachBindings not implemented');
    }

    _attach() {
        Object.observe(this, (args) => {
            let filteredArgs = _.chain(args)
            .filter((arg) => {
                return !this.$$.FILTERED_PROPERTIES.has(arg.name);
            })
            .unique((arg) => {
                return arg.name; 
            })
            .value();

            if (filteredArgs.length) {
                this._fireChanged(args);
                let updateArgs = filteredArgs.map((arg) => {
                    let updateArg = {
                        property: arg.name,
                        value: this[arg.name],
                        oldValue: arg.oldValue
                    };
                    
                    updateArg.type = _.isNull(updateArg.value) || _.isUndefined(updateArg.value) ? 
                        constants.CHANGE_TYPE.DELETE : constants.CHANGE_TYPE.UPDATE;
                    
                    return updateArg;
                });

                this.emit('_object.observe', updateArgs);
            }
        });
        
        this.$$.ref.once('value', () => {
            this.$$.loaded = true;
            this._fireLoaded();
        });

        let firebaseBinding = new FiresyncBinding(constants.BINDING_TYPE.FIREBASE, {ref: this.$$.ref}, this);
        let handlersMap = new Map();

        firebaseBinding.updateForeign((property, value, type) => {
            return new Promise((resolve) => {
                let updateVal = {};
                switch (type) {
                    case constants.CHANGE_TYPE.UPDATE:
                    case constants.CHANGE_TYPE.ADD: {
                        updateVal[property] = value;
                        break;
                    }
                    case constants.CHANGE_TYPE.DELETE: {
                        updateVal[property] = null;
                        break;
                    }
                    default: break;
                }

                this._updateRemote(updateVal, resolve);
            });
        });

        firebaseBinding.detach(() => {
            for (let [event, handler] of handlersMap.entries()) {
                this.$$.ref.off(event, handler);
            }
        });

        [constants.FIREBASE_EVENT.CHILD_ADDED, constants.FIREBASE_EVENT.CHILD_REMOVED, constants.FIREBASE_EVENT.CHILD_CHANGED]
            .forEach((event) => {
                let handler = (snap, prevChild) => {
                    let property = snap.key();
                    let value = snap.val();
                    let type;

                    switch (event) {
                        case constants.FIREBASE_EVENT.CHILD_ADDED: {
                            type = constants.CHANGE_TYPE.ADD;
                            break;
                        }
                        case constants.FIREBASE_EVENT.CHILD_REMOVED: {
                            type = constants.CHANGE_TYPE.DELETE;
                            break;
                        }
                        case constants.FIREBASE_EVENT.CHILD_CHANGED: {
                            type = constants.CHANGE_TYPE.UPDATE;
                            break;
                        }
                        case constants.FIREBASE_EVENT.CHILD_MOVED: {
                            return this._updateBindings({ 
                                property, 
                                value, 
                                type: constants.CHANGE_TYPE.DELETE
                            }, constants.CHANGE_TYPE.FOREIGN)
                                .then(() => {
                                    this._updateBindings({
                                        property,
                                        value,
                                        prevChild,
                                        type: constants.CHANGE_TYPE.ADD
                                    }, constants.CHANGE_TYPE.FOREIGN);        
                                });
                        }
                        default: break;
                    }

                    this._updateBindings({ property, value, type, prevChild }, constants.CHANGE_ORIGIN.FOREIGN);
                };

                handlersMap.set(event, handler);
                this.$$.ref.on(event, handler);
            });

        return this._addBinding(firebaseBinding);
    }

    _updateBindings(changes, origin, target = constants.BINDING_TARGET.ANY, force = false) {
        return new Promise((resolve) => {
            let bindingQueue = queue();

            this.$$.bindings.forEach((binding) => {
                let queuedBinding = (cb) => {
                    if (binding.inProgress && binding.origin !== origin && !force) {
                        return cb();
                    }

                    let bindingResolvedPromises = [];

                    if (binding.type === target || target === constants.BINDING_TARGET.ANY) {
                        binding.begin(origin);
                        changes = Array.isArray(changes) ? changes : [changes];
                        changes.forEach((change) => {
                            let property = change.property;
                            let value = change.value;
                            let type = change.type;
                            let additionalData = {};
                            
                            additionalData.prevChild = change.prevChild;
                            additionalData.origin = origin;
                            additionalData.target = target;

                            if (origin === constants.CHANGE_ORIGIN.LOCAL) {
                                bindingResolvedPromises.push(binding.updateForeign(property, value, type, additionalData));
                            } else {
                                bindingResolvedPromises.push(binding.updateLocal(property, value, type, additionalData));
                            }
                        });
                    }

                    Promise.all(bindingResolvedPromises).then(() => {
                        binding.end();
                        cb();
                    });
                };

                bindingQueue.push(queuedBinding);
            });

            bindingQueue.start(() => {
                resolve();
            });
        });
    }

    /**
     * Fired the local object changes, regardless whether it is a result of direct local change
     * or remote change.
     * @event FiresyncBase#changed
     * @example firesyncObject.on('changed', function(){});
     */
    _fireChanged(args) {
        this.emit('changed', args);
    }

    /**
     * Fired when the initial value of the object is loaded from the remote.
     * @event FiresyncBase#loaded
     * @example firesyncObject.on('loaded', function(){});
     */
    _fireLoaded() {
        let emited = this.emit('loaded');
        if (!emited) {
            let newListenerCb = (ev) => {
                if (ev === 'loaded') {
                    this.off('newListener', newListenerCb);
                    setTimeout(() => {
                        this.emit('loaded');
                    }, 20);
                }
            };

            this.on('newListener', newListenerCb);
        }
    }

    /**
     * Fired when the local object's value is sucesfully set to the remote.
     * @param {Error} err Synchronization error
     * @event FiresyncBase#synced
     * @example firesyncObject.on('synced', function(err){});
     */
    _fireSynced(err) {
        this.emit('synced', err);
    }

    *_enumerate(obj = this) {
        for (let i in obj) {
            if (obj.hasOwnProperty(i)
                && !this.$$.FILTERED_PROPERTIES.has(i)) {
                yield i;
            }
        }
    }

    _setRemoteCore() {
        return new Promise((resolve) => {
            this._setRemote((err) => {
                this._fireSynced(err);
                resolve();
            });
        });
    }

    _setRemote(cb, val) {
        this.$$.ref.set(val, cb);
    }

    _updateRemote(val, cb) {
        this.$$.ref.update(val, (err) => {
            this._fireSynced(err);
            cb();
        });
    }

    _updateLocal(obj) {
        for (let i of this._enumerate(obj)) {
            this[i] = obj[i];
        }
    }

    _setLocal(obj) {
        this._clear();
        this._updateLocal(obj);
    }

    _clear() {
        for (let i of this._enumerate()) {
            delete this[i];
        }
    }
}

export { FiresyncBase };