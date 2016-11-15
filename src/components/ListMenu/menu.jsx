import * as React from 'react';
import './style.scss';
import { Menu, Switch, Button, Input, Modal } from 'antd';
import { actions as menu_actions } from '../../store/global_reducers/menu';
import MenuDropDown from './MenuDropDown';
import UserSelect from './UserSelect';
import { push } from 'react-router-redux';
const Item = Menu.Item;
const SubMenu = Menu.SubMenu;
export class ListMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const get_node_name = (id) => {
            for (let num of this.props.menu.list) {
                if (num.id == id) {
                    return { name: num.name, url: num.url };
                }
            }
        };
        const render_single_node = (item) => {
            const { name, url } = get_node_name(item.id);
            let settings;
            if (this.props.menu.display_edit && this.props.menu.managed.indexOf(item.id) >= 0) {
                settings = <MenuDropDown menu_id={item.id} menu={this.props.menu} dispatch={this.props.dispatch}/>;
            }
            else {
                settings = '';
            }
            if (item.children.length > 0) {
                return <SubMenu title={<div>{settings}<span>{name}</span></div>} onTitleClick={(key) => this.props.dispatch(push(`/file-module-list/${key.key}/articles/`))} key={item.id}>
          {item.children.map(render_single_node)}
        </SubMenu>;
            }
            else {
                return <Item key={item.id} data-url={url}>
          <div>{settings}<span>{name}</span></div>
        </Item>;
            }
        };
        return (<div>
        <div style={{ paddingLeft: '24px' }}>
          <Switch onChange={value => this.props.dispatch(menu_actions.change_store_without_api(['display_edit', value]))}/>
        </div>
        <br />
        {this.props.menu.display_edit && this.props.menu.root_managed ?
            <Input.Group style={{
                paddingLeft: '22px',
                paddingRight: '22px'
            }}>
            <Input placeholder="添加根菜单项" ref="input" value={this.props.menu.adding_content} onChange={e => this.props.dispatch(menu_actions.change_store_without_api(['adding_content', e.target.value]))}/>
            <div className="ant-input-group-wrap">
              <Button onClick={e => this.props.dispatch(menu_actions.add_menu(this.props.menu.adding_content))} disabled={this.props.menu.adding_content.length > 0 ? false : true} loading={this.props.menu.adding_root_fetching} className="ant-search-btn justify-button">添加</Button>
            </div>
          </Input.Group> : ''}
        <Menu mode="inline" key="menu" onClick={(obj) => this.props.dispatch(push(`/file-module-list/${obj.key}/articles/`))}>
          {this.props.menu.sort.length > 0 ? this.props.menu.sort.map(render_single_node) : this.props.dispatch(menu_actions.update_menu())}
        </Menu>
        <Modal closable={true} title="转让菜单所有权" visible={this.props.menu.convert_modal_visible} onOk={() => this.props.dispatch(menu_actions.change_store_without_api(['convert_modal_visible', false]))}><UserSelect {...this.props}/></Modal>
      </div>);
    }
}
export default ListMenu;
//# sourceMappingURL=menu.jsx.map