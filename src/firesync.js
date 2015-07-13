'use strict';

import { FiresyncObject } from './firesyncObject.js';
import { FiresyncArray } from './firesyncArray.js';

/**
 * @class firesync
 * @classdesc The entry point of firesync.
 * @global
 */

/**
 * Creates a {@link FiresyncObject} or {@link FiresyncArray} from the specified ref depending on the underlying value.
 * The returned object is guaranteed to be loaded.
 * @memberof firesync
 * @param {FirebaseRef} ref from a specified ref
 * @returns {Promise}
 * @example firesync.create(ref).then(function(firesyncObj) {}); //if ref's underlying value is array a FiresyncArray is returned
 * otherwise a FiresyncObject
 */
function create(ref) {
    return new Promise((resolve) => {
        ref.once('value', (snap) => {
            let val = snap.val();

            let obj = null;

            if (Array.isArray(val)) {
                obj = new FiresyncArray(ref);
            } else {
                obj = new FiresyncObject(ref);
            }

            obj.once('loaded', () => {
                resolve(obj);
            });
        });
    });
}

/**
 * Returns a non-synchronized array or an object of {@link FiresyncObject} or {@link FiresyncArray} objects.
 * The objects are guaranteed to be loaded.
 * @memberof firesync
 * @param {FirebaseRef} ref from a specified ref
 * @returns {Promise}
 * @example firesync.map(ref).then(function(objOrArr){});
 */
function map(ref) {
    return new Promise((resolve) => {
        ref.once('value', (snap) => {
            let val = snap.val();

            if (val) {
                let promises = Object.keys(val).map((k) => {
                    let childRef = ref.child(k);

                    return new Promise((r) => {
                        create(childRef).then((item) => {
                            r({
                                item: item,
                                key: k
                            });
                        });
                    });
                });

                return Promise.all(promises)
                    .then((items) => {
                        let isArray = Array.isArray(val);
                        let result = isArray ? [] : {};

                        items.forEach((i) => {
                            let item = i.item;
                            let key = i.key;

                            if (isArray) {
                                result.push(item);
                            } else {
                                result[key] = item;
                            }
                        });

                        return resolve(result);
                    });
            }

            return resolve([]);
        });
    });
}

export { FiresyncObject, FiresyncArray, create, map };
