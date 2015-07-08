'use strict';

import { FiresyncBase } from './firesyncBase.js';
import { FiresyncObject } from './firesyncObject.js';

let _ = require('lodash');
let mixin = require('mixin');

class FiresyncBaseProxy extends FiresyncBase {
    constructor(ref) {
        super(ref);
    }
}

let ArrayFiresyncBaseProxy = mixin(FiresyncBaseProxy, Array);

/**
 * @class FiresyncArray
 * @classdesc An array which keeps its values synchronized with the remote.
 * One should use the {@link FiresyncArray} methods to manipulate the values.
 * @protected
 * @extends FiresyncBase
 * @example new firesync.FiresyncArray(ref);
 * @memberof firesync
 */
class FiresyncArray extends ArrayFiresyncBaseProxy {
    constructor(ref) {
        super(ref);

        let valueHandler = (cb) => {
            return (snap) => {
                let val = snap.val();
                let key = snap.key();

                cb(val, key);
            };
        };

        ref.on('child_added', valueHandler((val, key) => {
            this.push(new FiresyncObject(ref.child(key)));
        }));
    }

    /**
     * Returns a new non-synchronized array with the user-set values only.
     * @returns {Array}
     */
    val() {
        return this.__$$.array;
    }

    /**
     * Returns the length of the array.
     * @returns {Number}
     * @example firesyncArray.add(1); firesyncArray.length() === 1; //true
     */
    length() {
        return this.__$$.array.length;
    }

    /**
     * Adds a value on the last index of the array.
     * @param {Object} val The object to add.
     * @example firesyncArray.add({val:1}); firesyncArray.add(5);
     */
    add(val) {
        this[this.__$$.index++] = val;
    }

    /**
     * Removes an element from the specified index and keeps the indeces in order.
     * @param {Number} index The index from which to remove the element.
     * @example firesyncArray.add(5); firesyncArray.add(6); firesyncArray.add(2);
     * firesyncArray.remove(1); firesyncArray[1] === 6; //true
     */
    remove(index) {
        let length = this.length();
        if (index >= 0 && index < length) {
            for (let i = index; i < length - 1; i++) {
                this[i] = this[i + 1];
            }

            delete this[length - 1];

            this.__$$.index--;
        }
    }
}

export { FiresyncArray };