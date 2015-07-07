'use strict';

let EventEmitter2 = require('eventemitter2').EventEmitter2;
let _ = require('lodash');
let queue = require('queue');

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

        this.__$$ = {};
        this.__$$.ref = ref;
        this.__$$.applying = false;
        this.__$$.loaded = false;
        this.__$$.setRemoteAfterLoad = false;
        this.__$$.refChangedCb = null;
        this.__$$.bindings = [];
        this.__$$.bindingQueue = queue();

        this.__$$.FILTERED_PROPERTIES = ['__$$', '_events', 'newListener', 'event'];
        this.__$$.BINDING_TYPES = { FIREBASE: 'FIREBASE', DOM: 'DOM' };
        this.__$$.BINDING_TARGETS = _.extend({ ANY: 'ANY' }, this.__$$.BINDING_TYPES);
        this.__$$.CHANGE_ORIGIN = { LOCAL: 'LOCAL', FOREIGN: 'FOREIGN' };
        /**
         * {
         *  type: 'property|attribute|event',
         *  foreignAttr: 'innerHtml|attr|value',
         *  localAttr: 'name',
         *  event: 'change'
         * }
         */
        this.__$$.BIND_TO_DEFAULT_SETTINGS = {
            type: 'innerHTML'
        };

        this.__$$.BIND_TO_DEFAULT_INPUT_SETTINGS = {
            type: 'event',
            foreignAttr: 'value',
            event: 'change'
        };

        this._attach();
    }

    val() {
        throw new Error('val is not implemented');
    }

    /**
     * Indicates whether the object has loaded its data from Firebase.
     * @returns {boolean}
     */
    loaded() {
        return this.__$$.loaded;
    }

    /**
     * Returns the ref set in the constructor
     * @returns {FirebaseRef}
     */
    ref() {
        return this.__$$.ref;
    }

    /**
     * Detaches from the subscribed events to the {@link FirebaseRef}
     */
    detach() {
        this.__$$.bindings.forEach((binding) => binding.detach());
        this.__$$.bindings = [];
    }

    bindTo(element, settings) {
        if (element.nodeName.toLowerCase() === 'input') {
            _.extend(settings, this.__$$.BIND_TO_DEFAULT_INPUT_SETTINGS);
        } else {
            _.extend(settings, this._$$.BIND_TO_DEFAULT_SETTINGS);
        }

        if (!settings.localAttr) {
            throw new Error('You must specify a localProperty to which to bind the DOM element.');
        }

        let binding = null;
        if (settings.type === 'event') {
            binding = this._bindToEvent(element, settings);
        } else if (settings.type === 'innerHTML') {
            binding = this._bindToProperty(element, settings);
        } else if (settings.type === 'attribute') {
            binding = this._bindToAttribute(element, settings);
        }

        _.extend(binding, {
            type: this.__$$.BINDING_TYPES.DOM,
            data: {
                element,
                settings
            },
            updateLocal: (property, value) => {
                return new Promise((resolve) => {
                    this[property] = value;
                    resolve();
                });
            }
        });

        this._addBinding(binding);

        return this;
    }

    _bindToEvent(element, settings) {
        let binding = {
            updateForeign: () => {
                return new Promise((resolve) => {
                    let val = this[settings.localAttr];
                    if (val) {
                        element[settings.foreignAttr] = val;
                    }

                    resolve();
                });
            }
            //TODO: add detach
        };

        let evCallback = () => {
            let change = {
                property: settings.localAttr,
                value: element[settings.foreignAttr]
            };

            this._updateBindings(change, this.__$$.CHANGE_ORIGIN.FOREIGN, this.__$$.BINDING_TARGETS.DOM);
        };

        element.addEventListener(settings.event, evCallback);

        return binding;
    }

    _bindToProperty(element, settings) {

    }

    _bindToAttribute(element, settings) {

    }

    /**
     * Applies a value to the object.
     * @param {object} val
     * @example firebaseObject.set({value: 1});
     */
    set(val) {
        return this._setLocal(val);
    }

    _addBinding(binding) {
        binding.$inProgress = binding.$inProgress || false;
        this.__$$.bindings.push(binding);
    }

    _attach() {
        let refChangedCb = (snap) => {
            let val = snap.val();

            if (!this.__$$.loaded) {
                this.__$$.loaded = true;
                return this._fireLoaded(val);
            }

            this._updateBindings(val, this.__$$.CHANGE_ORIGIN.FOREIGN, this.__$$.BINDING_TARGETS.FIREBASE);
        };

        let firebaseBinding = {
            type: this.__$$.BINDING_TYPES.FIREBASE,
            data: {
                ref: this.__$$.ref
            },
            detach: () => {
                this.__$$.ref.off('value', refChangedCb);
            },
            updateLocal: (val) => {
                return new Promise((resolve) => {
                    this._setLocal(val);
                    this._fireChanged();
                    resolve();
                });
            },
            updateForeign: () => {
                return this._setRemoteCore();
            }
        };

        this._addBinding(firebaseBinding);

        this.__$$.ref.on('value', refChangedCb);

        Object.observe(this, (args) => {
            let filteredArgs = args.filter((arg) => {
                return this.__$$.FILTERED_PROPERTIES.indexOf(arg.name) === -1;
            });

            if (!filteredArgs.length) {
                return;
            }

            this._fireChanged();

            if (!this.__$$.loaded) {
                return this.__$$.setRemoteAfterLoad = true;
            }

            //TODO: check for relevant change types only and dedupe the results
            let changes = args.map((change) => {
                return {
                    property: change.name,
                    value: this[change.name]
                };
            });

            this._updateBindings(changes, this.__$$.CHANGE_ORIGIN.LOCAL);
        });
    }

    _updateBindings(changes, origin, target = this.__$$.BINDING_TARGETS.ANY) {
        this.__$$.bindings.forEach((binding) => {
            let queueItem = (cb) => {
                if (binding.$inProgress) {
                    return cb();
                }

                let bindingResolvedPromises = [];

                if (binding.type === target || target === this.__$$.BINDING_TARGETS.ANY) {
                    binding.$inProgress = true;
                    if (binding.type === this.__$$.BINDING_TYPES.FIREBASE) {
                        if (origin === this.__$$.CHANGE_ORIGIN.LOCAL) {
                            bindingResolvedPromises.push(binding.updateForeign());
                        } else {
                            bindingResolvedPromises.push(binding.updateLocal(changes));
                        }
                    } else {
                        changes = Array.isArray(changes) ? changes : [changes];
                        changes.forEach((change) => {
                            let property = change.property;
                            let value = change.value;

                            if (origin === this.__$$.CHANGE_ORIGIN.LOCAL) {
                                bindingResolvedPromises.push(binding.updateForeign(property, value));
                            } else {
                                bindingResolvedPromises.push(binding.updateLocal(property, value));
                            }
                        });
                    }
                }

                Promise.all(bindingResolvedPromises).then(() => {
                    binding.$inProgress = false;
                    cb();
                });
            };

            this.__$$.bindingQueue.push(queueItem);
        });

        this.__$$.bindingQueue.start();
    }

    /**
     * Fired the local object changes, regardless whether it is a result of direct local change
     * or remote change.
     * @event FiresyncBase#changed
     * @example firesyncObject.on('changed', function(){});
     */
    _fireChanged() {
        this.emit('changed');
    }

    /**
     * Fired when the initial value of the object is loaded from the remote.
     * @event FiresyncBase#loaded
     * @example firesyncObject.on('loaded', function(){});
     */
    _fireLoaded(val) {
        if (this.__$$.setRemoteAfterLoad) {
            this._setRemoteCore();
        }

        if (val) {
            this._setLocal(val);
        }

        var emited = this.emit('loaded');
        if (!emited) {
            this.once('newListener', (ev) => {
                if (ev === 'loaded') {
                    setTimeout(() => {
                        this.emit('loaded');
                    }, 100);
                }
            });
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
                && this.__$$.FILTERED_PROPERTIES.indexOf(i) === -1) {
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

    _setRemote(cb) {
        this.__$$.ref.set(this.val(), cb);
    }

    _setLocal(obj) {
        this._clear();

        for (let i of this._enumerate(obj)) {
            this[i] = obj[i];
        }
    }

    _clear() {
        for (let i of this._enumerate()) {
            delete this[i];
        }
    }
}

export { FiresyncBase }