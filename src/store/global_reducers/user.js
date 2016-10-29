/**
 * Created by Administrator on 2016/10/28.
 */
"use strict";
const http_1 = require('./../../http/http');
const redux_actions_1 = require('redux-actions');
// ------------------------------------
// Constants
// ------------------------------------
exports.update_user_info = redux_actions_1.createAction("UPDATE_USER_INFO");
exports.update_user = () => {
    return (dispatch, getState) => {
        http_1.default('auth/user', 'get').then(json => dispatch(exports.update_user_info(json)));
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    UPDATE_USER_INFO: (state, action) => {
        return Object.assign({}, state, { user: action.payload });
    }
}, {});
