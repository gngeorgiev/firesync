'use strict';

let EventEmitter = require('events').EventEmitter;

const FILTERED_PROPERTIES = ['__$$', '_events', '_maxListeners'];

class FiresyncBase extends EventEmitter {
    constructor(ref) {
        super();

        this.__$$ = {};
        this.__$$.ref = ref;
        this.__$$.applying = false;
        this.__$$.loaded = false;
        this.__$$.setRemoteAfterLoad = false;
        this.__$$.suspendObservers = false;
        this.__$$.refChangedCb = null;

        this._attach();
    }

    val() {
        throw new Error('val is not implemented');
    }

    loaded() {
        return this.__$$.loaded;
    }

    ref() {
        return this.__$$.ref;
    }

    detach() {
        return this.__$$.ref.off('value', this.__$$.refChangedCb);
    }

    _attach() {
        this.__$$.refChangedCb = (snap) => {
            if (!this.__$$.loaded) {
                this.__$$.loaded = true;
                return this._fireLoaded(snap.val());
            }

            if (this.__$$.suspendObservers) {
                return this.__$$.suspendObservers = false;
            }

            let val = snap.val();

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

    _fireChanged() {
        this.emit('changed');
    }

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

    _fireSynced(err) {
        this.emit('synced', err);
    }

    *_enumerate(obj = this) {
        for (let i in obj) {
            if (obj.hasOwnProperty(i)
                && FILTERED_PROPERTIES.indexOf(i) === -1) {
                yield i;
            }
        }
    }

    _apply(obj, setRemote) {
        if (this.__$$.applying) {
            return this.__$$.applying = false;
        }

        this.__$$.applying = true;
        this._fireChanged();

        this._clear();
        this._setLocal(obj, setRemote);
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