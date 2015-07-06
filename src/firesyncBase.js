'use strict';

let EventEmitter2 = require('eventemitter2').EventEmitter2;
let _ = require('lodash');

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
        this.__$$.suspendObservers = false;
        this.__$$.refChangedCb = null;
        this.__$$.FILTERED_PROPERTIES = ['__$$', '_events', 'newListener', 'event'];
        this.__$$.bindings = [];

        this.__$$.BIND_TO_DEFAULT_SETTINGS = {
            type: 'property',
            elementProperty: 'innerHtml'
        };

        this.__$$.BIND_TO_DEFAULT_INPUT_SETTINGS = {
            type: 'event',
            elementProperty: 'value',
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
        return this.__$$.ref.off('value', this.__$$.refChangedCb);
    }

    bindTo(element, settings) {
        if (element.nodeName.toLowerCase() === 'input') {
            _.extend(settings, this.__$$.BIND_TO_DEFAULT_INPUT_SETTINGS);
        } else {
            _.extend(settings, this._$$.BIND_TO_DEFAULT_SETTINGS);
        }

        if (!settings.localProperty) {
            throw new Error('You must specify a localProperty to which to bind the DOM element.');
        }

        let callback = null;
        if (settings.type === 'event') {
            callback = this._bindToEvent(element, settings);
        } else if (settings.type === 'property') {
            callback = this._bindToProperty(element, settings);
        } else if (settings.type === 'attribute') {
            callback = this._bindToAttribute(element, settings);
        }

        this.__$$.bindings.push({ element, settings, callback });
    }

    _bindToEvent(element, settings) {
        let callback = () => {

        };

        element.addEventListener(settings.event, callback);
        return callback;
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

    _attach() {
        this.__$$.refChangedCb = (snap) => {
            let val = snap.val();

            if (!this.__$$.loaded) {
                this.__$$.loaded = true;
                return this._fireLoaded(val);
            }

            if (this.__$$.suspendObservers) {
                return this.__$$.suspendObservers = false;
            }

            this.__$$.suspendObservers = true;
            this._setLocal(val);
            this._fireChanged();
        };

        this.__$$.ref.on('value', this.__$$.refChangedCb);

        Object.observe(this, () => {
            this._fireChanged();

            if (!this.__$$.loaded) {
                return this.__$$.setRemoteAfterLoad = true;
            }

            if (this.__$$.suspendObservers) {
                return this.__$$.suspendObservers = false;
            }

            this._setRemoteCore();
        });
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
        this.__$$.suspendObservers = true;
        this._setRemote((err) => {
            this._fireSynced(err);
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