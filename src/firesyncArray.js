'use strict';

import { FiresyncBase } from './firesyncBase.js';
import { FiresyncObject } from './firesyncObject.js';
import * as constants from './constants.js';
import mixins from 'es6-mixins';
import _ from 'lodash';

/**
 * Identifier {object|string|number}
 * @external identifier
 * An identifier to find an item in the array. First the key of the element will be tried
 * to match with the identifier, then `firesyncarray.indexOf(identifier)` will be used 
 * to find the element and if the identifier is a number it will be directly used as an index.
 * If you are storing integers in the array use the {FiresyncArray.prototype.key} method first
 * to get the correct key.
 */
 
 /**
  * 
  * 
  */

/**
 * @class FiresyncArray
 * @classdesc An array which keeps its values synchronized with the remote.
 * One should use the {@link FiresyncArray} methods to manipulate the values.
 * @protected
 * @extends FiresyncBase
 * @example new firesync.FiresyncArray(ref);
 * @memberof firesync
 * @mixes Array
 */
class FiresyncArray extends FiresyncBase {
    constructor(ref) {
        super(ref);

        this.$$.indeces = new Map();
        this.$$.keys = new Map();
        this.$$.FILTERED_PROPERTIES.add('iterator');
        
        /**
         * @member {Array} iterator A simple array which is in sync with the {@link FiresyncArray}.
         * @memberof firesync.FiresyncArray
         * @instance
         * Used for DOM Binding since {@link RactiveJs} does not support array mixins.
         * @example firesyncArray.bindTo({el: 'body', template: '{{#iterator}}<div>{{value}}</div>{{/iterator}}'});
         */
        this.iterator = [];
    }

    /**
     * Returns a key by a specified index.
     * @method key
     * @memberof firesync.FiresyncArray.prototype
     * @returns {string} The key of the object at the specified index.
     * @example firesyncArray.key(0) === '-Ju5kIB-e3ZABIccrOjK';
     */
    key(index) {
        if (typeof index !== 'number') {
            index = this.indexOf(index);
        }

        return this.$$.keys.get(index + 1);
    }

    /**
     * Update an object using a specified identifier. This is the only supported way
     * to update an element inside {FiresyncArray}. Keeps the synchronization.
     * @method update
     * @memberof firesync.FiresyncArray.prototype
     * @param {any} value The update value.
     * @param {Identifier} identifier The identifier to be used to find the element.
     * @returns {Promise} For when the synchronization is complete.
     */
    update(value, identifier) {
        let index = this._getIndex(identifier);
        let key = this.key(index);
        let val = this[index];

        if (typeof val === 'number' || typeof val === 'string') {
            val = value;
        } else {
            _.extend(val, value);
        }

        this.splice(index, 1, value);
        this.iterator.splice(index, 1, value);

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

    /**
     * Adds an element to the {FiresyncArray}. By default generates Firebase arrays with
     * standard Firebase-generated keys. This is the only supported way
     * to add an element inside {FiresyncArray}. Keeps the synchronization.
     * @method add
     * @memberof firesync.FiresyncArray.prototype
     * @param {any} value The value to add to the arary.
     * @param {string} [key=ref.push().key()] The key to be used for the element. Default key is recommended.
     * @param {number} [index=last] The index at which to add the element to the local array.
     * @returns {Promise} For when the synchronization is complete.
     */
    add(value, key = this.$$.ref.push().key(), index = this.$$.indeces.size + 1) {
        this.splice(index, 0, value);
        this.iterator.splice(index, 0, value);
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

    /**
     * Removes an element from the array by an {Identifier}
     * @method remove
     * @memberof firesync.FiresyncArray.prototype
     * @param {Identifier} identifier The identifier to find the array by.
     * @returns {Promise} For when the synchronization is complete.
     */
    remove(identifier) {
        let index = this._getIndex(identifier);
        let key = this.key(index);
        let oldValue = this.splice(index, 1);
        this.iterator.splice(index, 1);
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
    
    /**
     * Moves an element from one index to another.
     * @method move
     * @memberof firesync.FiresyncArray.prototype
     * @param {Identifier} oldIdentifier The identifier for the old object.
     * @param {Identifier} newIdentifier The identifier for the new object.
     * @returns {Promise} For when the synchronization is complete.
     */
    move(oldIdentifier, newIdentifier) {
        let oldIndex = this._getIndex(oldIdentifier);
        let newIndex = this._getIndex(newIdentifier);
        
        this._move(this, oldIndex, newIndex);
        this._move(this.iterator, oldIndex, newIndex);
        
        let key = this.key(oldIndex);
        this.$$.indeces.delete(oldIndex);
        this.$$.keys.delete(key);
        
        this.$$.indeces.set(key, newIndex);
        this.$$.keys.set(newIndex, key);
        
        super._fireChanged([{
            name: 'value',
            object: this[newIndex],
            type: constants.CHANGE_TYPE.UPDATE
        }]);
        
        return super._updateBindings({
            property: key,
            type: constants.CHANGE_TYPE.UPDATE,
        }, constants.CHANGE_ORIGIN.LOCAL, constants.BINDING_TARGET.FIREBASE);
    }

    _move(arr, fromIndex, toIndex) {
        var element = arr[fromIndex];
        arr.splice(fromIndex, 1);
        arr.splice(toIndex, 0, element);
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
                        this.update(value, index);
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