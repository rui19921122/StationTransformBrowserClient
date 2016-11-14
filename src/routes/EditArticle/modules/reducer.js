"use strict";
// ------------------------------------
// Constants
// ------------------------------------
const http_1 = require("../../../http/http");
const antd_1 = require("antd");
const redux_actions_1 = require("redux-actions");
// ------------------------------------
// Actions
// ------------------------------------
const update_article = redux_actions_1.createAction('update_article');
const update_files = redux_actions_1.createAction('update_files');
exports.check_permission = (id) => {
    return (dispatch, getState) => {
        dispatch(update_article()); // 初始化
        const url = `/api/article/${id}/edit/`;
        http_1.default(url, 'get').then(json => dispatch(update_article(json)));
    };
};
exports.put_article = (title, article_id, content) => {
    return (dispatch, getState) => {
        const url = `/api/article/${article_id}/`;
        http_1.default(url, 'put', false, {}, JSON.stringify({
            name: title,
            content: content || ''
        })).then(json => {
            dispatch(update_article(json));
            antd_1.message.success('更新成功');
        });
    };
};
exports.delete_file = (id, article_id) => {
    return (dispatch, getState) => {
        const url = `/api/article/file/${id}/`;
        const state = getState();
        http_1.default(url, 'delete').then(json => {
            dispatch(exports.reload_files(article_id));
            antd_1.message.success("删除成功");
        });
    };
};
exports.reload_files = (id) => {
    return (dispatch, getState) => {
        const url = `/api/article/${id}/files/`;
        http_1.default(url, 'get').then(json => {
            dispatch(update_files(json));
        });
    };
};
exports.actions = {
    update_article,
    check_permission: exports.check_permission,
    put_article: exports.put_article,
    delete_file: exports.delete_file,
    reload_files: exports.reload_files
};
// ------------------------------------
// Action Handlers
// ------------------------------------
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    fetching: false,
    article: {}
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    update_article: (state, action) => {
        return Object.assign({}, state, { article: action.payload });
    },
    update_files: (state, action) => {
        let _article = state.article;
        _article['files'] = action.payload;
        return Object.assign({}, state, _article);
    }
}, initialState);
