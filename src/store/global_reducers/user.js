/**
 * Created by Administrator on 2016/10/28.
 */
"use strict";
var http_1 = require('./../../http/http');
var redux_actions_1 = require('redux-actions');
// ------------------------------------
// Constants
// ------------------------------------
exports.update_user_info = redux_actions_1.createAction("UPDATE_USER_INFO");
exports.update_fetching = redux_actions_1.createAction("update_fetching");
exports.update_user = function () {
    return function (dispatch, getState) {
        dispatch(exports.update_fetching(true));
        http_1.default('/api/auth/user/', 'get', true).then(function (res) {
            if (res.status === 200) {
                dispatch(exports.update_fetching(false));
                res.json().then(function (json) { return dispatch(exports.update_user_info(json)); });
            }
            else {
                dispatch(exports.update_fetching(false));
            }
        });
    };
};
exports.login = function (username, password) {
    return function (dispatch, getState) {
        dispatch(exports.update_fetching(true));
        http_1.default('/api/auth/login/', 'post', false, {}, JSON.stringify({ username: username, password: password })).then(function (json) {
            dispatch(exports.update_user());
            dispatch(exports.update_fetching(false));
        }).catch(dispatch(exports.update_fetching(false)));
    };
};
exports.actions = {
    update_user: exports.update_user,
    login: exports.login
};
var initialState = {
    name: undefined,
    department: undefined,
    managed_menu: [],
    admin_menu: [],
    fetching: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    UPDATE_USER_INFO: function (state, action) {
        return Object.assign({}, state, {
            name: action.payload['username'],
            department: action.payload['department'],
            managed_menu: action.payload['managed_menu'],
            admin_menu: action.payload['admin_menu']
        });
    },
    update_fetching: function (state, action) {
        return Object.assign({}, state, { fetching: action.payload });
    }
}, initialState);
//# sourceMappingURL=user.js.map