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
const antd_1 = require('antd');
const reducer_1 = require("../modules/reducer");
const editModalForm_1 = require('./editModalForm');
const RangePicker = antd_1.DatePicker.RangePicker;
class FileModuleListView extends React.Component {
    componentDidMount() {
        if (this.props.menu && this.props.menu.list.length > 0) {
        }
        else {
            this.props.dispatch(reducer_1.actions.check_permission(this.props.params.id));
        }
    }
    render() {
        return (React.createElement(FileModuleLayout_1.FileModuleLayout, __assign({}, this.props), React.createElement(antd_1.Row, {type: "flex", justify: "center"}, React.createElement("h1", null, "修改文章")), React.createElement(antd_1.Row, {type: "flex", justify: "start"}, React.createElement(antd_1.Col, {span: 16, offset: 2}, React.createElement(editModalForm_1.ArticleFormComponent, {dispatch: this.props.dispatch, menu: this.props.menu, article_id: this.props.params.id, edit_article: this.props.edit_article})))));
    }
}
exports.FileModuleListView = FileModuleListView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileModuleListView;
