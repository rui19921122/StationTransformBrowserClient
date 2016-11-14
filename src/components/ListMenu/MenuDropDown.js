"use strict";
const React = require('react');
const antd_1 = require('antd');
const Item = antd_1.Menu.Item;
require('./style.scss');
const menu_1 = require('../../store/global_reducers/menu');
class MenuDropDown extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            'add': true,
            'visible': false,
            'content': ''
        };
    }
    render() {
        const handleActions = (e) => {
            console.log(e.key);
            const key = e.key;
            let f = key.split('-');
            let action = f[3];
            if (action == "add") {
                this.setState({ 'add': false });
            }
            else if (action == "delete") {
                this.setState({ 'visible': false });
                this.props.dispatch(menu_1.actions.delete_menu(this.props.menu_id));
            }
            else if (action == "admin") {
            }
            else if (action == "convert") {
                this.setState({ 'visible': false });
            }
            return;
        };
        const handleSubmitButtonClick = (e) => {
            this.props.dispatch(menu_1.actions.add_menu(this.state.content, this.props.menu_id));
            e.stopPropagation();
        };
        const menu = React.createElement(antd_1.Menu, {className: "menu-setting", onClick: e => handleActions(e)}, 
            this.state.add ?
                React.createElement(Item, {key: "menu-settings-" + this.props.menu_id + "-add"}, "增加子菜单") :
                React.createElement(Item, {key: "menu-settings-" + this.props.menu_id + "-dispatch", style: { width: '300px' }}, 
                    React.createElement(antd_1.Input.Group, null, 
                        React.createElement(antd_1.Input, {placeholder: "点击空白区域可关闭", ref: "input", onPressEnter: handleSubmitButtonClick, onChange: (e) => this.setState({ 'content': e.target.value })}), 
                        React.createElement("div", {className: "ant-input-group-wrap"}, 
                            React.createElement(antd_1.Button, {icon: "check-circle-o", onClick: handleSubmitButtonClick, disabled: this.state.content.length > 0 ? false : true, loading: this.props.menu.add_fetching, className: "ant-search-btn justify-button"}, "添加")
                        ))
                ), 
            React.createElement(antd_1.Menu.Divider, null), 
            React.createElement(Item, {key: "menu-settings-" + this.props.menu_id + "-admin"}, "管理管理员"), 
            React.createElement(antd_1.Menu.Divider, null), 
            React.createElement(Item, {key: "menu-settings-" + this.props.menu_id + "-convert"}, "转让所有权"), 
            React.createElement(antd_1.Menu.Divider, null), 
            React.createElement(Item, {className: "warn", key: "menu-settings-" + this.props.menu_id + "-delete"}, "删除此目录"));
        return (React.createElement(antd_1.Dropdown, {overlay: menu, trigger: ["click"], onClick: (e) => e.stopPropagation(), onVisibleChange: flag => this.state.visible ? this.setState({ 'visible': false }) :
            this.setState({ 'visible': flag, 'add': true, 'content': '' }), visible: this.state.visible}, 
            React.createElement(antd_1.Icon, {type: "setting", onClick: (e) => this.setState({
                'visible': !this.state.visible,
            }), className: "icon-settings"})
        ));
    }
}
;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuDropDown;
