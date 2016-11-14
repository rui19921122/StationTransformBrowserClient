"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
require("./components.scss");
const FileModuleLayout_1 = require("../../../layouts/FileModuleLayout/FileModuleLayout");
const ArticleTable_1 = require("../../../components/ArticleTable/ArticleTable");
const SearchToolBar_1 = require("../../../components/SearchToolBar/SearchToolBar");
const antd_1 = require("antd");
const articles_1 = require("../../../store/global_reducers/articles");
const RangePicker = antd_1.DatePicker.RangePicker;
class FileModuleListView extends React.Component {
    componentDidMount() {
        this.props.dispatch(articles_1.actions.get_articles(0));
    }
    render() {
        return (React.createElement(FileModuleLayout_1.FileModuleLayout, __assign({}, this.props),
            React.createElement(antd_1.Row, { type: "flex", justify: "center" },
                React.createElement("h1", null, "\u6240\u6709\u6587\u7AE0")),
            React.createElement(SearchToolBar_1.SearchToolBar, { dispatch: this.props.dispatch, menu_id: 0, actions: {
                    search: articles_1.actions.get_articles,
                    add: articles_1.actions.get_articles
                } }),
            React.createElement(antd_1.Row, { type: "flex", justify: "center", align: "middle" },
                React.createElement(antd_1.Col, { span: 20 },
                    React.createElement(ArticleTable_1.ArticleTable, { articles: this.props.articles, dispatch: this.props.dispatch, menu_id: 0 })))));
    }
}
exports.FileModuleListView = FileModuleListView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileModuleListView;
