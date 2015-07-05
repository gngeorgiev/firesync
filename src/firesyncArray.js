'use strict';

import { FiresyncBase } from './firesyncBase.js'

class FiresyncArray extends FiresyncBase {
    constructor(ref) {
        super(ref);

        this.__$$.index = 0;

        this.once('loaded', () => {
            this.__$$.index = this.val().length;
        });
    }

    val() {
        let arr = [];
        for (let i of this._enumerate()) {
            arr.push(this[i]);
        }

        return arr;
    }

    length() {
        return this.__$$.index;
    }

    add(val) {
        this[this.__$$.index++] = val;
    }

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

export { FiresyncArray }