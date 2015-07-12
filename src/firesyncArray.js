'use strict';

import { FiresyncBase } from './firesyncBase.js';
import { FiresyncObject } from './firesyncObject.js';
import * as constants from './constants.js';

import mixins from 'es6-mixins';
import _ from 'lodash';

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
        this.$$.keys = new Map();
    }

    key(index) {
        if (typeof index !== 'number') {
            index = this.indexOf(index);
        }

        return this.$$.keys.get(index + 1);
    }

    update(value, identifier) {
        let index = this._getIndex(identifier);
        let key = this.key(index);
        let val = this[index];

        if (typeof val === 'number' || typeof val === 'string') {
            val = this[index] = value;
        } else {
            _.extend(val, value);
        }

        super._fireChanged([{
            name: 'value',
            object: val,
            type: constants.CHANGE_TYPE.UPDATE
        }]);

        return super._updateBindings({
            property: key,
            value: val,
            type: constants.CHANGE_TYPE.UPDATE
        }, constants.CHANGE_ORIGIN.LOCAL, constants.BINDING_TARGET.FIREBASE);
    }

    add(value, key = this.$$.ref.push().key(), index = this.$$.indeces.size + 1) {
        this.splice(index, 0, value);
        this.$$.indeces.set(key, index);
        this.$$.keys.set(index, key);

        super._fireChanged([{
            name: 'length',
            object: value,
            type: constants.CHANGE_TYPE.ADD
        }]);

        return super._updateBindings({
            property: key,
            value: value,
            type: constants.CHANGE_TYPE.ADD
        }, constants.CHANGE_ORIGIN.LOCAL, constants.BINDING_TARGET.FIREBASE);
    }

    remove(identifier) {
        //number

        let index = this._getIndex(identifier);
        let key = this.key(index);
        let oldValue = this.splice(index, 1);
        this.$$.indeces.delete(key);
        this.$$.keys.delete(index);

        super._fireChanged([{
            name: 'length',
            object: null,
            type: constants.CHANGE_TYPE.DELETE,
            oldValue: oldValue
        }]);

        return super._updateBindings({
            property: key,
            type: constants.CHANGE_TYPE.DELETE
        }, constants.CHANGE_ORIGIN.LOCAL, constants.BINDING_TARGET.FIREBASE);
    }

    _getIndex(identifier) {
        let index = identifier;

        if (typeof identifier === 'string') {
            index = this.$$.indeces.get(identifier);
        }

        if (typeof identifier === 'object' || index === undefined) {
            index = this.indexOf(identifier);
        }

        return index;
    }

    _attachBindings(firebaseBinding) {
        firebaseBinding.updateLocal((property, value, type, additionalData) => {
            return new Promise((resolve) => {
                let prevChild = additionalData.prevChild;
                let child = prevChild || property;
                let index = this.$$.indeces.get(child) || 0;

                switch (type) {
                    case constants.CHANGE_TYPE.UPDATE: {
                        this[index] = value;
                        this.$$.indeces.set(property, index);
                        this.$$.keys.set(index, property);
                        break;
                    }
                    case constants.CHANGE_TYPE.ADD: {
                        this.add(value, ++index, property);
                        break;
                    }
                    case constants.CHANGE_TYPE.DELETE: {
                        this.remove(index);
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