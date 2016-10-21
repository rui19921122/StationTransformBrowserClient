/**
 * Created by hanrui on 2016/10/21.
 */
import * as React from 'react'
import {Menu} from 'antd'
import {IndexLink, Link} from 'react-router'
import './Header.scss'
const SubMenu = Menu.SubMenu;

export const Header = () => (
    <div>
        <h1>芜湖东站站改施工应用管理系统</h1>
        <IndexLink to='/' activeClassName='route--active'>
            Home
        </IndexLink>
        {' · '}
        <Link to='/counter' activeClassName='route--active'>
            Counter
        </Link>
    </div>
)

export default Header
