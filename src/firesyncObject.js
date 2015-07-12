'use strict';

import { FiresyncBase } from './firesyncBase.js';
import * as constants from './constants.js';

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

                this._updateBindings(updateArgs, constants.CHANGE_ORIGIN.LOCAL);
            }
        });
    }
}

export { FiresyncObject };