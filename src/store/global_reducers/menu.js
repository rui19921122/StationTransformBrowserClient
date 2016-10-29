/**
 * Created by Administrator on 2016/10/28.
 */
"use strict";
const http_1 = require('./../../http/http');
const redux_actions_1 = require('redux-actions');
// ------------------------------------
// Constants
// ------------------------------------
exports.update_menu_info = redux_actions_1.createAction("update_menu_info");
exports.update_menu = () => {
    return (dispatch, getState) => {
        http_1.default('/api/menu/', 'get').then(json => dispatch(exports.update_menu_info(json)));
    };
};
let initial_state = {
    list: [],
    sort: []
};
exports.actions = {
    update_menu: exports.update_menu
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    update_menu_info: (state, action) => {
        return Object.assign({}, state, {
            list: action.payload['items'],
            sort: action.payload['sort']
        });
    }
}, initial_state);
