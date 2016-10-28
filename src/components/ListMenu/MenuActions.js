"use strict";
const http_1 = require('../../http');
/**
 * Created by Administrator on 2016/10/25.
 */
// ------------------------------------
// Constants
// ------------------------------------
exports.UPDATE_MENU_DETAIL = 'UPDATE_MENU_DETAIL';
// ------------------------------------
// Actions
// ------------------------------------
/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */
exports.GetMenuFromServer = () => {
    return (dispatch, getState) => {
        http_1.default('/auth/user/', 'get').then(json => dispatch(exports.UPDATE_MENU_DETAIL, json));
    };
};
exports.actions = {
    GetMenuFromServer: exports.GetMenuFromServer,
    UPDATE_MENU_DETAIL: exports.UPDATE_MENU_DETAIL
};
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [exports.UPDATE_MENU_DETAIL]: (state, action) => Object.assign({}, state, action)
};
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    menu: {},
    list: []
};
function counterReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = counterReducer;
