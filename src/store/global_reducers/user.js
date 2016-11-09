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
exports.update_fetching = redux_actions_1.createAction("update_fetching");
exports.update_user = () => {
    return (dispatch, getState) => {
        dispatch(exports.update_fetching(true));
        http_1.default('/api/auth/user/', 'get').then(json => {
            dispatch(exports.update_fetching(false));
            dispatch(exports.update_user_info(json));
        });
    };
};
exports.login = (username, password) => {
    return (dispatch, getState) => {
        dispatch(exports.update_fetching(true));
        http_1.default('/api/auth/login/', 'post', false, {}, JSON.stringify({ username: username, password: password })).then(json => {
            dispatch(exports.update_fetching(false));
            dispatch(exports.update_user());
        });
    };
};
exports.actions = {
    update_user: exports.update_user,
    login: exports.login
};
const initialState = {
    name: undefined,
    department: undefined,
    managed_menu: [],
    admin_menu: [],
    fetching: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    UPDATE_USER_INFO: (state, action) => {
        return Object.assign({}, state, {
            name: action.payload['username'],
            department: action.payload['department'],
            managed_menu: action.payload['managed_menu'],
            admin_menu: action.payload['admin_menu']
        });
    },
    update_fetching: (state, action) => {
        return Object.assign({}, state, { fetching: action.payload });
    }
}, initialState);
