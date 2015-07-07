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

        this.__$$.FILTERED_PROPERTIES.push('iterator');
    }

    /**
     * Returns a new, non-synchronized object with the user-set values only.
     * @returns {object}
     */
    val() {
        return super.asObject();
    }
}

export { FiresyncObject }