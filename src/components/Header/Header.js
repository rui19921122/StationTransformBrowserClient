"use strict";
/**
 * Created by hanrui on 2016/10/21.
 */
const React = require('react');
const antd_1 = require('antd');
const react_router_1 = require('react-router');
require('./Header.scss');
const SubMenu = antd_1.Menu.SubMenu;
const Item = antd_1.Menu.Item;
const http_1 = require('./../../http');
const f = http_1.default('/api/menu/', 'get');
console.log(f);
exports.Header = () => (React.createElement("header", {id: "header"}, React.createElement(antd_1.Row, {className: "global-header", type: "flex", align: "middle"}, React.createElement(antd_1.Col, {span: 4, className: "title"}, React.createElement("h1", null, "Test")), React.createElement(antd_1.Col, {span: 15}, React.createElement(antd_1.Menu, {mode: "horizontal", id: "nav", onClick: (e) => console.log(e.item)}, React.createElement(Item, null, React.createElement(react_router_1.Link, {to: "#"}, React.createElement("span", null, "test1"))), React.createElement(Item, null, React.createElement(react_router_1.Link, {to: "#"}, "模块名称1")), React.createElement(Item, null, React.createElement(react_router_1.Link, {to: "#"}, "模块名称1")))))));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Header;
