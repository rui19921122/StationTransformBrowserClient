/**
 * Created by hanrui on 2016/10/21.
 */
import * as React from 'react'
import {Row, Menu, Col, Badge} from 'antd'
import {IndexLink, Link} from 'react-router'
import './Header.scss'
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
import fetch_api from './../../http'
const f = fetch_api('/api/menu/','get')
console.log(f)

export const Header = () => (
  <header id="header">
    <Row className="global-header" type="flex" align="middle">
      <Col span={4} className="title">
        <h1>Test</h1>
      </Col>
      <Col span={15}>
        <Menu mode="horizontal" id="nav" onClick={(e)=>console.log(e.item)}>
          <Item><Link to={"#"}><span>test1</span></Link></Item>
          <Item><Link to={"#"}>模块名称1</Link></Item>
          <Item><Link to={"#"}>模块名称1</Link></Item>
        </Menu>
      </Col>
    </Row>
  </header>
);

export default Header
