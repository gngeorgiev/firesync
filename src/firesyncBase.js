'use strict';

const EventEmitter2 = require('eventemitter2').EventEmitter2;
const _ = require('lodash');
const queue = require('queue');
const Ractive = require('ractive/ractive.min');

import { FiresyncBinding } from './firesyncBinding.js'

/**
 * FirebaseRef object
 * @external FirebaseRef
 * @see {@link https://www.firebase.com/docs/web/api/firebase/child.html}
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

        this.iterator = this; //for mustache templates iteration

        this.$$ = {};
        this.$$.ref = ref;
        this.$$.loaded = false;
        this.$$.bindings = [];

        this.$$.FILTERED_PROPERTIES = new Set(['$$', '_events', 'newListener', 'event']);
        this.$$.BINDING_TYPE = { FIREBASE: 'FIREBASE', DOM: 'DOM' };
        this.$$.BINDING_TARGET = _.extend({ ANY: 'ANY' }, this.$$.BINDING_TYPE);
        this.$$.CHANGE_ORIGIN = { LOCAL: 'LOCAL', FOREIGN: 'FOREIGN' };
        this.$$.FIREBASE_EVENT = {
            CHILD_ADDED: 'child_added',
            CHILD_REMOVED: 'child_removed',
            CHILD_CHANGED: 'child_changed'
        };

        this.$$.CHANGE_TYPE = { ADD: 'add', DELETE: 'delete', UPDATE: 'update' }; //Object.observe

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
     * Detaches from the subscribed events to the {@link FirebaseRef}
     */
    detach() {
        this.$$.bindings.forEach((binding) => binding.detach());
        this.$$.bindings = [];
    }

    bindTo(settings) {
        _.extend(settings, {
            data: this
        });

        let ractive = new Ractive(settings);
        let reactiveListeners = new Map();

        let binding = {
            type: this.$$.BINDING_TYPE.DOM,
            data: { ractive },
            updateLocal: (property, value) => {
                return new Promise((resolve) => {
                    this[property] = value;
                    resolve();
                });
            },
            updateForeign: (property, value) => {
                return new Promise((resolve) => {
                    ractive.set(property, value);
                    resolve();
                })
            },
            detach: () => {
                for (var observer of reactiveListeners.values()) {
                    observer.cancel();
                }
            }
        };

        let applyObserve = (value, key) => {
            let initialObserve = true;
            let observer = ractive.observe(key, (newValue) => {
                if (initialObserve) {
                    return initialObserve = false;
                }

                binding.updateLocal(key, newValue);
            });

            if (!reactiveListeners.get(key)) {
                reactiveListeners.set(key, observer);
            }
        };

        _.each(settings.data, applyObserve);
        this._addBinding(binding);
        return this;
    }

    /**
     * Applies a value to the object.
     * @param {object} val
     * @example firebaseObject.set({value: 1});
     */
    set(val) {
        return this._setLocal(val);
    }

    setRemote(val) {
        return this._setRemote(val);
    }

    update(val) {
        return this._updateLocal(val);
    }

    updateRemote(val) {
        return this._updateRemote(val);
    }

    _addBinding(binding) {
        this.$$.bindings.push(binding);
        return binding;
    }

    _attachBindings(binding) {
        throw new Error('_attachBindings not implemented');
    }

    _attach() {
        this.$$.ref.once('value', () => {
            this.$$.loaded = true;
            this._fireLoaded();
        });

        let firebaseBinding = new FiresyncBinding(this.$$.BINDING_TYPE.FIREBASE, {ref: this.$$.ref});
        let handlersMap = new Map();

        firebaseBinding.updateForeign((property, value, type) => {
            return new Promise((resolve) => {
                let updateVal = {};
                switch (type) {
                    case this.$$.CHANGE_TYPE.UPDATE:
                    case this.$$.CHANGE_TYPE.ADD: {
                        updateVal[property] = value;
                        break;
                    }
                    case this.$$.CHANGE_TYPE.DELETE: {
                        updateVal[property] = null;
                        break;
                    }
                    default: break;
                }

                this._updateRemote(updateVal, resolve);
            });
        });

        firebaseBinding.detach(() => {
            for (var [event, handler] of handlersMap.entries()) {
                this.$$.ref.off(event, handler);
            }
        });

        [this.$$.FIREBASE_EVENT.CHILD_ADDED, this.$$.FIREBASE_EVENT.CHILD_REMOVED, this.$$.FIREBASE_EVENT.CHILD_CHANGED]
            .forEach((event) => {
                let handler = (snap, prevChild) => {
                    let property = snap.key();
                    let value = snap.val();
                    let type;

                    switch (event) {
                        case this.$$.FIREBASE_EVENT.CHILD_ADDED: {
                            type = this.$$.CHANGE_TYPE.ADD;
                            break;
                        }
                        case this.$$.FIREBASE_EVENT.CHILD_REMOVED: {
                            type = this.$$.CHANGE_TYPE.DELETE;
                            break;
                        }
                        case this.$$.FIREBASE_EVENT.CHILD_CHANGED: {
                            type = this.$$.CHANGE_TYPE.UPDATE;
                            break;
                        }
                        default: break;
                    }

                    this._updateBindings({ property, value, type, prevChild }, this.$$.CHANGE_ORIGIN.FOREIGN);
                };

                handlersMap.set(event, handler);
                this.$$.ref.on(event, handler);
            });

        return this._addBinding(firebaseBinding);
    }

    _updateBindings(changes, origin, target = this.$$.BINDING_TARGET.ANY) {
        return new Promise((resolve) => {
            let bindingQueue = queue();

            this.$$.bindings.forEach((binding) => {
                let queuedBinding = (cb) => {
                    if (binding.inProgress && binding.origin !== origin) {
                        return cb();
                    }

                    let bindingResolvedPromises = [];

                    if (binding.type === target || target === this.$$.BINDING_TARGET.ANY) {
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

                            if (origin === this.$$.CHANGE_ORIGIN.LOCAL) {
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
                && this.$$.FILTERED_PROPERTIES.indexOf(i) === -1) {
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