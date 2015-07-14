'use strict';

import { FiresyncBase } from './firesyncBase.js';
import * as constants from './constants.js';
import _ from 'lodash';

/**
 * @class FiresyncObject
 * @classdesc An object which keeps its values synchronized with the remote Firebase.
 * @protected
 * @extends FiresyncBase
 * @memberof firesync
 */
class FiresyncObject extends FiresyncBase {
    constructor(ref, defaultValues) {
        super(ref);

        this.once('loaded', () => {
            _.defaults(this, defaultValues);
        })
    }
    
    /**
     * Applies a value to the object. Clears all other properties, only the new
     * ones are preserved
     * @param {object} val
     * @example firebaseObject.set({value: 1});
     */
    set(val) {
        return super._setLocal(val);
    }

    /**
     * Applies a value to the remote {FirebaseRef}. Clears all other properties, only the new
     * ones are preserved 
     * @param {object} val
     * @example firebaseObject.setRemote({value: 1});
     */
    setRemote(val) {
        return super._setRemote(val);
    }

    /**
     * Applies a value to the object. Keeps old properties and applies the new
     * ones on top.
     * @param {object} val
     * @example firebaseObject.update({value: 1});
     */
    update(val) {
        return super._updateLocal(val);
    }

    /**
     * Applies a value to the remote {FirebaseRef}. Keeps old properties and applies the new
     * ones on top.
     * @param {object} val
     * @example firebaseObject.updateRemote({value: 1});
     */
    updateRemote(val) {
        return super._updateRemote(val);
    }

    _attachBindings(firebaseBinding) {
        this.on('_object.observe', (updateArgs) => {
            super._updateBindings(updateArgs, constants.CHANGE_ORIGIN.LOCAL);
        });
    }
}

export { FiresyncObject };