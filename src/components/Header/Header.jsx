import * as React from 'react';
import { Row, Menu, Col } from 'antd';
import { Link } from 'react-router';
import './Header.scss';
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
import { actions } from '../../store/global_reducers/user';
import LoginInForm from './LoginInForm';
export class Header extends React.Component {
    componentDidMount() {
        this.props.dispatch(actions.update_user());
    }
    render() {
        return (<header id="header">
      <Row className="global-header" type="flex" align="middle">
        <Col span={4} className="title">
          <h1>Test</h1>
        </Col>
        <Col span={9}>
          {this.props.user.name ? `欢迎您，${this.props.user.name}` :
            <LoginInForm user={this.props.user} dispatch={this.props.dispatch}/>}
        </Col>
        <Col span={11}>
          <Menu mode="horizontal" id="nav">
            <Item><Link to={"/file-module-list/"}><span>文件管理</span></Link></Item>
            <Item><Link to={"#"}>模块名称1</Link></Item>
            <Item><Link to={"#"}>模块名称1</Link></Item>
          </Menu>
        </Col>
      </Row>
    </header>);
    }
}
export default Header;
//# sourceMappingURL=Header.jsx.map