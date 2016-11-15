"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
require('./components.scss');
var FileModuleLayout_1 = require('../../../layouts/FileModuleLayout/FileModuleLayout');
var antd_1 = require('antd');
var menu_1 = require("../../../store/global_reducers/menu");
var addArticleForm_1 = require('./addArticleForm');
var RangePicker = antd_1.DatePicker.RangePicker;
var FileModuleListView = (function (_super) {
    __extends(FileModuleListView, _super);
    function FileModuleListView() {
        _super.apply(this, arguments);
    }
    FileModuleListView.prototype.componentDidMount = function () {
        if (this.props.menu && this.props.menu.list.length > 0) {
        }
        else {
            this.props.dispatch(menu_1.actions.update_menu());
        }
        // this.props.dispatch(article_actions.get_articles(0));
    };
    FileModuleListView.prototype.render = function () {
        return (<FileModuleLayout_1.FileModuleLayout {...this.props}>
        <antd_1.Row type="flex" justify="center">
          <h1>添加文章</h1>
        </antd_1.Row>
        <antd_1.Row type="flex" justify="start">
          <antd_1.Col span={16} offset={2}>
            <addArticleForm_1.ArticleFormComponent {...this.props}/>
          </antd_1.Col>
        </antd_1.Row>
      </FileModuleLayout_1.FileModuleLayout>);
    };
    return FileModuleListView;
}(React.Component));
exports.FileModuleListView = FileModuleListView;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileModuleListView;
//# sourceMappingURL=view.jsx.map