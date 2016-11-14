"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * Created by Administrator on 2016/10/23.
 */
const React = require("react");
require("./style.scss");
const antd_1 = require("antd");
const menu_1 = require("../../store/global_reducers/menu");
const MenuDropDown_1 = require("./MenuDropDown");
const UserSelect_1 = require("./UserSelect");
const react_router_redux_1 = require("react-router-redux");
const Item = antd_1.Menu.Item;
const SubMenu = antd_1.Menu.SubMenu;
class ListMenu extends React.Component {
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
                settings = React.createElement(MenuDropDown_1.default, { menu_id: item.id, menu: this.props.menu, dispatch: this.props.dispatch });
            }
            else {
                settings = '';
            }
            if (item.children.length > 0) {
                return React.createElement(SubMenu, { title: React.createElement("div", null,
                        settings,
                        React.createElement("span", null, name)), onTitleClick: (key) => this.props.dispatch(react_router_redux_1.push(`/file-module-list/${key.key}/articles/`)), key: item.id }, item.children.map(render_single_node));
            }
            else {
                return React.createElement(Item, { key: item.id, "data-url": url },
                    React.createElement("div", null,
                        settings,
                        React.createElement("span", null, name)));
            }
        };
        return (React.createElement("div", null,
            React.createElement("div", { style: { paddingLeft: '24px' } },
                React.createElement(antd_1.Switch, { onChange: value => this.props.dispatch(menu_1.actions.change_store_without_api(['display_edit', value])) })),
            React.createElement("br", null),
            this.props.menu.display_edit && this.props.menu.root_managed ?
                React.createElement(antd_1.Input.Group, { style: {
                        paddingLeft: '22px',
                        paddingRight: '22px'
                    } },
                    React.createElement(antd_1.Input, { placeholder: "添加根菜单项", ref: "input", value: this.props.menu.adding_content, onChange: e => this.props.dispatch(menu_1.actions.change_store_without_api(['adding_content', e.target.value])) }),
                    React.createElement("div", { className: "ant-input-group-wrap" },
                        React.createElement(antd_1.Button, { onClick: e => this.props.dispatch(menu_1.actions.add_menu(this.props.menu.adding_content)), disabled: this.props.menu.adding_content.length > 0 ? false : true, loading: this.props.menu.adding_root_fetching, className: "ant-search-btn justify-button" }, "\u6DFB\u52A0"))) : '',
            React.createElement(antd_1.Menu, { mode: "inline", key: "menu", onClick: (obj) => this.props.dispatch(react_router_redux_1.push(`/file-module-list/${obj.key}/articles/`)) }, this.props.menu.sort.length > 0 ? this.props.menu.sort.map(render_single_node) : this.props.dispatch(menu_1.actions.update_menu())),
            React.createElement(antd_1.Modal, { closable: true, title: "转让菜单所有权", visible: this.props.menu.convert_modal_visible, onOk: () => this.props.dispatch(menu_1.actions.change_store_without_api(['convert_modal_visible', false])) },
                React.createElement(UserSelect_1.default, __assign({}, this.props)))));
    }
}
exports.ListMenu = ListMenu;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListMenu;
