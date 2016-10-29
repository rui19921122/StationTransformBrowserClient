/**
 * Created by Administrator on 2016/10/23.
 */
import * as React from 'react'
import './style.scss'
import {Menu, Dropdown, Icon} from 'antd'
import {MenuStoreInterface, actions as menu_actions} from '../../store/global_reducers/menu'
import {MenuItemInterface, detailItemInterface} from '../../api/menu'


interface props {
  dispatch: any,
  menu: MenuStoreInterface,
  handle_items_click: Function
}
const Item = Menu.Item;
const SubMenu = Menu.SubMenu;
export class ListMenu extends React.Component<props,void> {
  constructor(props) {
    super(props)
  }

  render() {
    const get_node_name = (id: number)=> {
      for (let num of this.props.menu.list) {
        if (num.id == id) {
          return {name: num.name, url: num.url}
        }
      }
    };

    const render_single_node = (item: detailItemInterface)=> {
      const {name, url} = get_node_name(item.id);
      let settings;
      if (this.props.menu.managed.indexOf(item.id) >= 0) {
        settings = <Icon type="setting"
                         className="icon-settings"
                         onClick={(e)=>{
        {/*todo 完成设置界面,并为鼠标进入添加动画*/}
        e.stopPropagation()
        }}/>;
      } else {
        settings = <span />
      }
      if (item.children.length > 0) {
        return <SubMenu title={<div>{settings}<span>{name}</span></div>}
                        key={item.id}>
          {item.children.map(render_single_node)}
        </SubMenu>
      } else {
        return <Item key={item.id} data-url={url}>
          <div>{settings}<span>{name}</span></div>
        </Item>
      }
    };

    return (
      <Menu mode="inline" key="menu">
        {this.props.menu.sort.length > 0 ? this.props.menu.sort.map(render_single_node) : this.props.dispatch(
          menu_actions.update_menu()
        )}
      </Menu>
    )
  }
}
export default ListMenu
