"use strict";
/**
 * Created by hanrui on 2016/10/21.
 */
const React = require('react');
const antd_1 = require('antd');
const react_router_1 = require('react-router');
require('./Header.scss');
const SubMenu = antd_1.Menu.SubMenu;
exports.Header = () => (<div>
        <h1>芜湖东站站改施工应用管理系统</h1>
        <react_router_1.IndexLink to='/' activeClassName='route--active'>
            Home
        </react_router_1.IndexLink>
        {' · '}
        <react_router_1.Link to='/counter' activeClassName='route--active'>
            Counter
        </react_router_1.Link>
    </div>);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Header;
