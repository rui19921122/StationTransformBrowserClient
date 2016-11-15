"use strict";
// ------------------------------------
// Constants
// ------------------------------------
var http_1 = require('../../../http/http');
var redux_actions_1 = require('redux-actions');
var react_router_redux_1 = require('react-router-redux');
// ------------------------------------
// Actions
// ------------------------------------
var update_articles = redux_actions_1.createAction('update_articles');
exports.new_article = function (title, menu, content) {
    return function (dispatch, getState) {
        var url = "/api/menu/" + menu + "/articles/";
        http_1.default(url, 'post', false, {}, JSON.stringify({ name: title, content: content || '' }))
            .then(function (json) { return dispatch(react_router_redux_1.push("/article/" + json['id'] + "/edit/")); });
    };
};
exports.actions = {
    new_article: exports.new_article,
};
// ------------------------------------
// Action Handlers
// ------------------------------------
// ------------------------------------
// Reducer
// ------------------------------------
var initialState = {
    fetching: false,
    articles: []
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    update_articles: function (state, action) {
        return Object.assign({}, state, action.payload);
    }
}, initialState);
//# sourceMappingURL=reducer.js.map