'use strict';

import { FiresyncBase } from './firesyncBase.js';

/**
 * @class FiresyncObject
 * @classdesc An object which keeps its values synchronized with the remote.
 * @protected
 * @extends FiresyncBase
 * @memberof firesync
 */
class FiresyncObject extends FiresyncBase {
    constructor(ref) {
        super(ref);
    }

    _attachBindings(firebaseBinding) {
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

                super._updateRemote(updateVal, resolve);
            });
        });

        firebaseBinding.updateLocal((property, value, type) => {
            return new Promise((resolve) => {
                switch (type) {
                    case this.$$.CHANGE_TYPE.UPDATE:
                    case this.$$.CHANGE_TYPE.ADD: {
                        this[property] = value;
                        break;
                    }
                    case this.$$.CHANGE_TYPE.DELETE: {
                        delete this[property];
                        break;
                    }
                    default: break;
                }

                resolve();
            });
        });
    }
}

export { FiresyncObject };