"use strict";
/**
 * Created by hanrui on 2016/10/21.
 */
const React = require('react');
const antd_1 = require('antd');
const react_router_1 = require('react-router');
require('./Header.scss');
const SubMenu = antd_1.Menu.SubMenu;
exports.Header = () => (<antd_1.Row>
    <antd_1.Col span={5}>
      <h1>test article</h1>
    </antd_1.Col>
    <react_router_1.IndexLink to='/' activeClassName='route--active'>
      Home
    </react_router_1.IndexLink>
    {' · '}
    <react_router_1.Link to='/counter' activeClassName='route--active'>
      Counter
    </react_router_1.Link>
  </antd_1.Row>);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.Header;
