'use strict';

import { FiresyncBase } from './firesyncBase.js';
import { FiresyncObject } from './firesyncObject.js';

import mixins from 'es6-mixins';


/**
 * @class FiresyncArray
 * @classdesc An array which keeps its values synchronized with the remote.
 * One should use the {@link FiresyncArray} methods to manipulate the values.
 * @protected
 * @extends FiresyncBase
 * @example new firesync.FiresyncArray(ref);
 * @memberof firesync
 */
class FiresyncArray extends FiresyncBase {
    constructor(ref) {
        super(ref);

        this.$$.indeces = new Map();
        this.$$.FILTERED_PROPERTIES.push('length');
    }

    add(value, index = this.$$.indeces.size + 1, key = this.$$.ref.push().key()) {
        this.splice(index, 0, value);
        this.$$.indeces.set(key, index);

        super._updateBindings({
            property: key,
            value: value,
            type: this.$$.CHANGE_TYPE.ADD
        }, this.$$.CHANGE_ORIGIN.LOCAL, this.$$.BINDING_TARGET.FIREBASE);
    }

    _attachBindings(firebaseBinding) {
        firebaseBinding.updateForeign(() => {

        });

        firebaseBinding.updateLocal((property, value, type, additionalData) => {
            return new Promise((resolve) => {
                let prevChild = additionalData.prevChild;
                let child = prevChild || property;
                let index = this.$$.indeces.get(child) || 0;

                switch (type) {
                    case this.$$.CHANGE_TYPE.UPDATE: {
                        this[index] = value;
                        this.$$.indeces.set(property, index);
                        break;
                    }
                    case this.$$.CHANGE_TYPE.ADD: {
                        this.add(value, ++index, property);
                        break;
                    }
                    case this.$$.CHANGE_TYPE.DELETE: {
                        this.splice(--index, 1);
                        this.$$.indeces.delete(property);
                        break;
                    }
                    default: break;
                }

                resolve();
            });
        });
    }
}

mixins(Array, FiresyncArray.prototype, {warn: false});

export { FiresyncArray };