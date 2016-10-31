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
exports.Header = () => {
    return (React.createElement("header", {id: "header"}, 
        React.createElement(antd_1.Row, {className: "global-header", type: "flex", align: "middle"}, 
            React.createElement(antd_1.Col, {span: 4, className: "title"}, 
                React.createElement("h1", null, "Test")
            ), 
            React.createElement(antd_1.Col, {span: 15}, 
                React.createElement(antd_1.Menu, {mode: "horizontal", id: "nav"}, 
                    React.createElement(Item, null, 
                        React.createElement(react_router_1.Link, {to: "/file-module-list/"}, 
                            React.createElement("span", null, "test1")
                        )
                    ), 
                    React.createElement(Item, null, 
                        React.createElement(react_router_1.Link, {to: "#"}, "模块名称1")
                    ), 
                    React.createElement(Item, null, 
                        React.createElement(react_router_1.Link, {to: "#"}, "模块名称1")
                    ))
            ))
    ));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Header;
