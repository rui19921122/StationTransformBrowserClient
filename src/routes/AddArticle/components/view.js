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
const antd_1 = require("antd");
const menu_1 = require("../../../store/global_reducers/menu");
const addArticleForm_1 = require("./addArticleForm");
const RangePicker = antd_1.DatePicker.RangePicker;
class FileModuleListView extends React.Component {
    componentDidMount() {
        if (this.props.menu && this.props.menu.list.length > 0) {
        }
        else {
            this.props.dispatch(menu_1.actions.update_menu());
        }
        // this.props.dispatch(article_actions.get_articles(0));
    }
    render() {
        return (React.createElement(FileModuleLayout_1.FileModuleLayout, __assign({}, this.props),
            React.createElement(antd_1.Row, { type: "flex", justify: "center" },
                React.createElement("h1", null, "\u6DFB\u52A0\u6587\u7AE0")),
            React.createElement(antd_1.Row, { type: "flex", justify: "start" },
                React.createElement(antd_1.Col, { span: 16, offset: 2 },
                    React.createElement(addArticleForm_1.ArticleFormComponent, __assign({}, this.props))))));
    }
}
exports.FileModuleListView = FileModuleListView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileModuleListView;
//# sourceMappingURL=view.js.map