import * as React from "react";
import {Dropdown, Menu, Icon, Input, Button} from "antd";
import "./style.scss";
import {actions, MenuStoreInterface} from "src/store/global_reducers/menu";
const Item = Menu.Item;
interface props {
  dispatch: any,
  menu: MenuStoreInterface
  menu_id: number
}
class ButtonAdd {
  onClick:any
}
const DropdownWithOnClick = Dropdown as typeof Dropdown || typeof ButtonAdd;

class MenuDropDown extends React.Component<props,any> {
  state = {
    'add': true,
    'visible': false,
    'content': ''
  };


  render() {
    const handleActions = (e) => {
      const key = e.key;
      let f = key.split('-');
      let action = f[3];
      if (action == "add") {
        this.setState({'add': false});
      } else if (action == "delete") {
        this.setState({'visible': false});
        this.props.dispatch(
          actions.delete_menu(this.props.menu_id)
        )
      } else if (action == "admin") {
      } else if (action == "convert") {
        this.setState({'visible': false});
        // this.props.dispatch(actions.change_store_without_api(
        //   ['convert_modal_visible', true]
        // ))
      }
      return
    };
    const handleSubmitButtonClick = (e) => {
      this.props.dispatch(actions.add_menu(this.state.content, this.props.menu_id));
      e.stopPropagation()
    };
    const menu = <Menu className="menu-setting"
                       onClick={e=>handleActions(e)}
    >
      {this.state.add ?
        <Item key={"menu-settings-"+this.props.menu_id+"-add"}>
          增加子菜单
        </Item>:
        <Item key={"menu-settings-"+this.props.menu_id+"-dispatch"}
              style={{width:'300px'}}
        >
          <Input.Group>
            <Input placeholder="点击空白区域可关闭" ref="input"
                   onPressEnter={handleSubmitButtonClick}
                   onChange={(e)=>this.setState({'content':(e.target as any).value})}
            />
            <div className="ant-input-group-wrap">
              <Button icon="check-circle-o"
                      onClick={handleSubmitButtonClick}
                      disabled={this.state.content.length<=0}
                      loading={this.props.menu.add_fetching}
                      className="ant-search-btn justify-button"
              >添加</Button>
            </div>
          </Input.Group>
        </Item>}
      <Menu.Divider/>
      <Item key={"menu-settings-"+this.props.menu_id+"-admin"}>管理管理员</Item>
      <Menu.Divider/>
      <Item key={"menu-settings-"+this.props.menu_id+"-convert"}>转让所有权</Item>
      <Menu.Divider/>
      <Item className="warn"
            key={"menu-settings-"+this.props.menu_id+"-delete"}>删除此目录</Item>
    </Menu>;
    return (
      <DropdownWithOnClick overlay={menu}
                trigger={["click"]}
                onClick={(e)=>e.stopPropagation()}
                onVisibleChange={flag=>this.state.visible?this.setState({'visible':false}):
                      this.setState({'visible':flag,'add':true,'content':''})
                      }
                visible={this.state.visible}
      >
        <Icon type="setting"
              onClick={(e)=>this.setState(
                          {
                          'visible':!this.state.visible,
                          }
                      )}
              className="icon-settings"
        />
      </DropdownWithOnClick>
    )
  }
}
export default MenuDropDown;
