'use strict';

import { FiresyncObject } from './firesyncObject.js';
import { FiresyncArray } from './firesyncArray.js';

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

function map(ref) {
    return new Promise((resolve) => {
        ref.once('value', (snap) => {
            let val = snap.val();

            if (val) {
                let promises = Object.keys(val).map((k) => {
                    let v = val[k];
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

export { FiresyncObject, FiresyncArray, create, map }
