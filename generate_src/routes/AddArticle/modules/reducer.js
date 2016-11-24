"use strict";
// ------------------------------------
// Constants
// ------------------------------------
const http_1 = require("../../../http/http");
const redux_actions_1 = require("redux-actions");
const react_router_redux_1 = require("react-router-redux");
// ------------------------------------
// Actions
// ------------------------------------
const update_articles = redux_actions_1.createAction('update_articles');
exports.new_article = (title, menu, content) => {
    return (dispatch, getState) => {
        const url = `/api/menu/${menu}/articles/`;
        http_1.default(url, 'post', false, {}, JSON.stringify({ name: title, content: content || '' }))
            .then(json => dispatch(react_router_redux_1.push(`/article/${json['id']}/edit/`)));
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
//# sourceMappingURL=reducer.js.map