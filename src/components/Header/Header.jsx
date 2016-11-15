"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by hanrui on 2016/10/21.
 */
var React = require('react');
var antd_1 = require('antd');
var react_router_1 = require('react-router');
require('./Header.scss');
var SubMenu = antd_1.Menu.SubMenu;
var Item = antd_1.Menu.Item;
var user_1 = require('../../store/global_reducers/user');
var LoginInForm_1 = require('./LoginInForm');
var Header = (function (_super) {
    __extends(Header, _super);
    function Header() {
        _super.apply(this, arguments);
    }
    Header.prototype.componentDidMount = function () {
        this.props.dispatch(user_1.actions.update_user());
    };
    Header.prototype.render = function () {
        return (<header id="header">
      <antd_1.Row className="global-header" type="flex" align="middle">
        <antd_1.Col span={4} className="title">
          <h1>Test</h1>
        </antd_1.Col>
        <antd_1.Col span={9}>
          {this.props.user.name ? "\u6B22\u8FCE\u60A8\uFF0C" + this.props.user.name :
            <LoginInForm_1.default user={this.props.user} dispatch={this.props.dispatch}/>}
        </antd_1.Col>
        <antd_1.Col span={11}>
          <antd_1.Menu mode="horizontal" id="nav">
            <Item><react_router_1.Link to={"/file-module-list/"}><span>文件管理</span></react_router_1.Link></Item>
            <Item><react_router_1.Link to={"#"}>模块名称1</react_router_1.Link></Item>
            <Item><react_router_1.Link to={"#"}>模块名称1</react_router_1.Link></Item>
          </antd_1.Menu>
        </antd_1.Col>
      </antd_1.Row>
    </header>);
    };
    return Header;
}(React.Component));
exports.Header = Header;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
//# sourceMappingURL=Header.jsx.map