'use strict';

import { FiresyncBase } from './firesyncBase.js';
import * as constants from './constants.js';
import _ from 'lodash';

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
        this.on('_object.observe', (updateArgs) => {
            super._updateBindings(updateArgs, constants.CHANGE_ORIGIN.LOCAL);
        });
    }
}

export { FiresyncObject };