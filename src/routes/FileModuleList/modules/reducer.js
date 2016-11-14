"use strict";
// ------------------------------------
// Constants
// ------------------------------------
const http_1 = require('../../../http/http');
const redux_actions_1 = require('redux-actions');
// ------------------------------------
// Actions
// ------------------------------------
const update_articles = redux_actions_1.createAction('update_articles');
exports.get_articles = (url) => {
    return (dispatch, getState) => {
        http_1.default(url, 'get').then(json => console.log(json));
    };
};
exports.actions = {
    get_articles: exports.get_articles
};
// ------------------------------------
// Action Handlers
// ------------------------------------
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    fetching: false,
    articles: []
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    update_articles: (state, action) => {
        return Object.assign({}, state, action.payload);
    }
}, initialState);
