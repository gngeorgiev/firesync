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
        Object.observe(this, (args) => {
            let filteredArgs = args.filter((arg) => {
                let result = this.$$.FILTERED_PROPERTIES.has(arg.name);
                return !result;
            });

            if (filteredArgs.length) {
                this._fireChanged(args);
                let updateArgs = filteredArgs.map((arg) => {
                    return {
                        property: arg.name,
                        value: this[arg.name],
                        type: arg.type,
                        oldValue: arg.oldValue
                    };
                });

                this._updateBindings(updateArgs, this.$$.CHANGE_ORIGIN.LOCAL);
            }
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