'use strict';

import { FiresyncBase } from './firesyncBase.js'

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

    /**
     * Returns a new, non-synchronized object with the user-set values only.
     * @returns {object}
     */
    val() {
        let obj = {};
        for (let i of super._enumerate()) {
            obj[i] = this[i];
        }

        return obj;
    }
}

export { FiresyncObject }