"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/10/23.
 */
var React = require('react');
require('./style.scss');
var antd_1 = require('antd');
var menu_1 = require('../../store/global_reducers/menu');
var MenuDropDown_1 = require('./MenuDropDown');
var UserSelect_1 = require('./UserSelect');
var react_router_redux_1 = require('react-router-redux');
var Item = antd_1.Menu.Item;
var SubMenu = antd_1.Menu.SubMenu;
var ListMenu = (function (_super) {
    __extends(ListMenu, _super);
    function ListMenu(props) {
        _super.call(this, props);
    }
    ListMenu.prototype.render = function () {
        var _this = this;
        var get_node_name = function (id) {
            for (var _i = 0, _a = _this.props.menu.list; _i < _a.length; _i++) {
                var num = _a[_i];
                if (num.id == id) {
                    return { name: num.name, url: num.url };
                }
            }
        };
        var render_single_node = function (item) {
            var _a = get_node_name(item.id), name = _a.name, url = _a.url;
            var settings;
            if (_this.props.menu.display_edit && _this.props.menu.managed.indexOf(item.id) >= 0) {
                settings = <MenuDropDown_1.default menu_id={item.id} menu={_this.props.menu} dispatch={_this.props.dispatch}/>;
            }
            else {
                settings = '';
            }
            if (item.children.length > 0) {
                return <SubMenu title={<div>{settings}<span>{name}</span></div>} onTitleClick={function (key) { return _this.props.dispatch(react_router_redux_1.push("/file-module-list/" + key.key + "/articles/")); }} key={item.id}>
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
          <antd_1.Switch onChange={function (value) { return _this.props.dispatch(menu_1.actions.change_store_without_api(['display_edit', value])); }}/>
        </div>
        <br />
        {this.props.menu.display_edit && this.props.menu.root_managed ?
            <antd_1.Input.Group style={{
                paddingLeft: '22px',
                paddingRight: '22px'
            }}>
            <antd_1.Input placeholder="添加根菜单项" ref="input" value={this.props.menu.adding_content} onChange={function (e) { return _this.props.dispatch(menu_1.actions.change_store_without_api(['adding_content', e.target.value])); }}/>
            <div className="ant-input-group-wrap">
              <antd_1.Button onClick={function (e) { return _this.props.dispatch(menu_1.actions.add_menu(_this.props.menu.adding_content)); }} disabled={this.props.menu.adding_content.length > 0 ? false : true} loading={this.props.menu.adding_root_fetching} className="ant-search-btn justify-button">添加</antd_1.Button>
            </div>
          </antd_1.Input.Group> : ''}
        <antd_1.Menu mode="inline" key="menu" onClick={function (obj) { return _this.props.dispatch(react_router_redux_1.push("/file-module-list/" + obj.key + "/articles/")); }}>
          {this.props.menu.sort.length > 0 ? this.props.menu.sort.map(render_single_node) : this.props.dispatch(menu_1.actions.update_menu())}
        </antd_1.Menu>
        <antd_1.Modal closable={true} title="转让菜单所有权" visible={this.props.menu.convert_modal_visible} onOk={function () { return _this.props.dispatch(menu_1.actions.change_store_without_api(['convert_modal_visible', false])); }}><UserSelect_1.default {...this.props}/></antd_1.Modal>
      </div>);
    };
    return ListMenu;
}(React.Component));
exports.ListMenu = ListMenu;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListMenu;
//# sourceMappingURL=menu.jsx.map