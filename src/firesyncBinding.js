'use strict';

import * as utils from './utils.js';

class FiresyncBinding {
    constructor(type, data) {

        this.type = type;
        this.data = data;
        this._updateLocal = null;
        this._updateForeign = null;
        this._detach = null;

        this.inProgress = false;
        this.origin = null;
    }

    static _isOnlyCallback(args) {
        return args.length === 1 && typeof args[0] === 'function';
    }

    updateLocal(cb) {
        if (FiresyncBinding._isOnlyCallback(arguments)) {
            return this._updateLocal = cb;
        }

        this._updateLocal.apply(null, arguments);
    }

    updateForeign(cb) {
        if (FiresyncBinding._isOnlyCallback(arguments)) {
            return this._updateForeign = cb;
        }

        this._updateForeign.apply(null, arguments);
    }

    detach(cb) {
        if (FiresyncBinding._isOnlyCallback(arguments)) {
            return this._detach = cb;
        }

        this._detach.apply(null, arguments);
    }

    begin(origin) {
        this.inProgress = true;
        this.origin = origin;
    }

    end() {
        this.inProgress = false;
        this.origin = null;
    }
}

export { FiresyncBinding };