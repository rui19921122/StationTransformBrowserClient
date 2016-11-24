"use strict";
const React = require("react");
const antd_1 = require("antd");
require("./style.scss");
const menu_1 = require("store/global_reducers/menu");
const Item = antd_1.Menu.Item;
class ButtonAdd {
}
const DropdownWithOnClick = antd_1.Dropdown || typeof ButtonAdd;
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
        const menu = React.createElement(antd_1.Menu, { className: "menu-setting", onClick: e => handleActions(e) },
            this.state.add ?
                React.createElement(Item, { key: "menu-settings-" + this.props.menu_id + "-add" }, "\u589E\u52A0\u5B50\u83DC\u5355") :
                React.createElement(Item, { key: "menu-settings-" + this.props.menu_id + "-dispatch", style: { width: '300px' } },
                    React.createElement(antd_1.Input.Group, null,
                        React.createElement(antd_1.Input, { placeholder: "点击空白区域可关闭", ref: "input", onPressEnter: handleSubmitButtonClick, onChange: (e) => this.setState({ 'content': e.target.value }) }),
                        React.createElement("div", { className: "ant-input-group-wrap" },
                            React.createElement(antd_1.Button, { icon: "check-circle-o", onClick: handleSubmitButtonClick, disabled: this.state.content.length <= 0, loading: this.props.menu.add_fetching, className: "ant-search-btn justify-button" }, "\u6DFB\u52A0")))),
            React.createElement(antd_1.Menu.Divider, null),
            React.createElement(Item, { key: "menu-settings-" + this.props.menu_id + "-admin" }, "\u7BA1\u7406\u7BA1\u7406\u5458"),
            React.createElement(antd_1.Menu.Divider, null),
            React.createElement(Item, { key: "menu-settings-" + this.props.menu_id + "-convert" }, "\u8F6C\u8BA9\u6240\u6709\u6743"),
            React.createElement(antd_1.Menu.Divider, null),
            React.createElement(Item, { className: "warn", key: "menu-settings-" + this.props.menu_id + "-delete" }, "\u5220\u9664\u6B64\u76EE\u5F55"));
        return (React.createElement(DropdownWithOnClick, { overlay: menu, trigger: ["click"], onClick: (e) => e.stopPropagation(), onVisibleChange: flag => this.state.visible ? this.setState({ 'visible': false }) :
                this.setState({ 'visible': flag, 'add': true, 'content': '' }), visible: this.state.visible },
            React.createElement(antd_1.Icon, { type: "setting", onClick: (e) => this.setState({
                    'visible': !this.state.visible,
                }), className: "icon-settings" })));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuDropDown;
//# sourceMappingURL=MenuDropDown.js.map