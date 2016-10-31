"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require('react');
require('./components.scss');
const FileModuleLayout_1 = require('../../../layouts/FileModuleLayout/FileModuleLayout');
const ArticleDisplay_1 = require('./ArticleDisplay');
class FileModuleListView extends React.Component {
    handle_items_click(url) {
        console.log(url);
    }
    render() {
        console.log(this.props);
        return (React.createElement(FileModuleLayout_1.FileModuleLayout, __assign({handle_items_click: this.handle_items_click}, this.props), 
            React.createElement(ArticleDisplay_1.ArticleDisplay, {dispatch: this.props.dispatch, articles: this.props.articles, location: this.props.location})
        ));
    }
}
exports.FileModuleListView = FileModuleListView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileModuleListView;
