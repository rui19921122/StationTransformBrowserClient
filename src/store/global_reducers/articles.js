/**
 * Created by Administrator on 2016/10/28.
 * 与文章有关的模块
 */
"use strict";
var http_1 = require("./../../http/http");
var redux_actions_1 = require("redux-actions");
var url_1 = require('../../url/url');
// ------------------------------------
// Constants
// ------------------------------------
exports.change_store_without_api = redux_actions_1.createAction("change_store_without_api");
exports.get_articles = function (pk, content, start, end) {
    return function (dispatch, getState) {
        var url;
        url = new url_1.url_function(pk == 0 ? "/api/menu/articles/" : "/api/menu/" + pk + "/articles/");
        if (content) {
            url.addParams('search', content);
        }
        if (start) {
            url.addParams('start', start.format("YYYY-MM-DD"));
        }
        if (end) {
            url.addParams('end', end.format("YYYY-MM-DD"));
        }
        dispatch(exports.actions.change_store_without_api(['fetching_articles', true]));
        http_1.default(url.toString(), 'get').then(function (json) {
            dispatch(exports.actions.change_store_without_api(['articles', json]));
            dispatch(exports.actions.change_store_without_api(['count', json.length]));
            dispatch(exports.actions.change_store_without_api(['fetching_articles', false]));
        }).catch(dispatch(exports.actions.change_store_without_api(['fetching_articles', false])));
    };
};
exports.actions = {
    change_store_without_api: exports.change_store_without_api,
    get_articles: exports.get_articles
};
var initial_state = {
    articles: [],
    fetching_articles: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    change_store_without_api: function (state, action) {
        var type = action.payload[0];
        var payload = action.payload[1];
        var _new = {};
        _new['' + type] = payload;
        return Object.assign({}, state, _new);
    }
}, initial_state);
//# sourceMappingURL=articles.js.map