"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var antd_1 = require('antd');
require('./style.scss');
var react_router_redux_1 = require('react-router-redux');
var columns = [
    {
        title: '序号',
        key: 'index',
        render: function (obj, array, index) { return index + 1; },
        width: '10%'
    },
    {
        title: '标题',
        key: 'title',
        dataIndex: 'name',
        width: '30%'
    },
    {
        title: '发布人',
        key: 'create_person',
        dataIndex: 'create_person',
        width: '15%'
    },
    {
        title: '时间',
        key: 'time',
        dataIndex: 'create_time',
        width: '10%',
        render: function (obj) {
            return obj.split('T')[0];
        }
    },
    {
        title: '所属菜单',
        key: 'menu',
        render: function (obj, array, index) {
            return obj.menu || '回收站';
        },
        width: '15%'
    }, {
        title: '操作',
        key: 'operate',
        render: function (obj, array, index) {
        },
        width: '20%'
    }
];
var ArticleTable = (function (_super) {
    __extends(ArticleTable, _super);
    function ArticleTable() {
        _super.apply(this, arguments);
    }
    ArticleTable.prototype.render = function () {
        var _this = this;
        return (<antd_1.Table className="table" bordered columns={columns} loading={this.props.articles.fetching_articles} dataSource={this.props.articles.articles} onRowClick={function (value) { return _this.props.dispatch(react_router_redux_1.push("/article/" + value.id + "/edit/")); }} rowKey="id"/>);
    };
    return ArticleTable;
}(React.Component));
exports.ArticleTable = ArticleTable;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ArticleTable;
//# sourceMappingURL=ArticleTable.jsx.map