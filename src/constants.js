'use strict';

import _ from 'lodash';

let constants = {};

constants.BINDING_TYPE = { FIREBASE: 'FIREBASE', DOM: 'DOM' };
constants.BINDING_TARGET = _.extend({ ANY: 'ANY' }, constants.BINDING_TYPE);
constants.CHANGE_ORIGIN = { LOCAL: 'LOCAL', FOREIGN: 'FOREIGN' };
constants.FIREBASE_EVENT = {
    CHILD_ADDED: 'child_added',
    CHILD_REMOVED: 'child_removed',
    CHILD_CHANGED: 'child_changed',
    CHILD_MOVED: 'child_moved'
};

constants.CHANGE_TYPE = { ADD: 'add', DELETE: 'delete', UPDATE: 'update' }; //Object.observe

export default constants;