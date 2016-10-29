"use strict";
/**
 * Created by Administrator on 2016/10/23.
 */
const React = require('react');
const antd_1 = require('antd');
const menu_1 = require('../../store/global_reducers/menu');
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
            if (item.children.length > 0) {
                return React.createElement(SubMenu, {title: name, onTitleClick: () => this.props.handle_items_click(url), key: item.id}, item.children.map(render_single_node));
            }
            else {
                return React.createElement(Item, {key: item.id, "data-url": url}, name);
            }
        };
        return (React.createElement(antd_1.Menu, {mode: "inline", key: "menu"}, this.props.menu.sort.length > 0 ? this.props.menu.sort.map(render_single_node) : this.props.dispatch(menu_1.actions.update_menu())));
    }
}
exports.ListMenu = ListMenu;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ListMenu;
