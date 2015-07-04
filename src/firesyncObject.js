'use strict';

import { FiresyncBase } from './firesyncBase.js'

class FiresyncObject extends FiresyncBase {
    constructor(ref) {
        super(ref);
    }

    val() {
        let obj = {};
        for (let i of super._enumerate()) {
            obj[i] = this[i];
        }

        return obj;
    }
}

export { FiresyncObject }