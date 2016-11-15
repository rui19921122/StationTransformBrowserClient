"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var menu_1 = require('../../components/ListMenu/menu');
var antd_1 = require('antd');
require('../../styles/core.scss');
var FileModuleLayout = (function (_super) {
    __extends(FileModuleLayout, _super);
    function FileModuleLayout() {
        _super.apply(this, arguments);
    }
    FileModuleLayout.prototype.render = function () {
        return (<antd_1.Row style={{ minHeight: '700px' }}>
        <antd_1.Col span={4}>
          <menu_1.ListMenu dispatch={this.props.dispatch} menu={this.props.menu}/>
        </antd_1.Col>
        <antd_1.Col span={20}>
          {this.props.children}
        </antd_1.Col>
      </antd_1.Row>);
    };
    return FileModuleLayout;
}(React.Component));
exports.FileModuleLayout = FileModuleLayout;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileModuleLayout;
//# sourceMappingURL=FileModuleLayout.jsx.map