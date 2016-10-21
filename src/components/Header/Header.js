"use strict";
/**
 * Created by hanrui on 2016/10/21.
 */
const React = require('react');
const antd_1 = require('antd');
const react_router_1 = require('react-router');
require('./Header.scss');
const SubMenu = antd_1.Menu.SubMenu;
exports.Header = () => (React.createElement("div", null, React.createElement("h1", null, "芜湖东站站改施工应用管理系统"), React.createElement(react_router_1.IndexLink, {to: '/', activeClassName: 'route--active'}, "Home"), ' · ', React.createElement(react_router_1.Link, {to: '/counter', activeClassName: 'route--active'}, "Counter")));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Header;
