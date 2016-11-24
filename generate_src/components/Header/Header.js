"use strict";
/**
 * Created by hanrui on 2016/10/21.
 */
const React = require("react");
const antd_1 = require("antd");
const react_router_1 = require("react-router");
require("./Header.scss");
const user_1 = require("../../store/global_reducers/user");
const LoginInForm_1 = require("./LoginInForm");
const SubMenu = antd_1.Menu.SubMenu;
const Item = antd_1.Menu.Item;
class Header extends React.Component {
    componentDidMount() {
        this.props.dispatch(user_1.actions.update_user());
    }
    render() {
        return (React.createElement("header", { id: "header" },
            React.createElement(antd_1.Row, { className: "global-header", type: "flex", align: "middle" },
                React.createElement(antd_1.Col, { span: 4, className: "title" },
                    React.createElement("h1", null, "Test")),
                React.createElement(antd_1.Col, { span: 9 }, this.props.user.name ? `欢迎您，${this.props.user.name}` :
                    React.createElement(LoginInForm_1.default, { user: this.props.user, dispatch: this.props.dispatch })),
                React.createElement(antd_1.Col, { span: 11 },
                    React.createElement(antd_1.Menu, { mode: "horizontal", id: "nav" },
                        React.createElement(Item, null,
                            React.createElement(react_router_1.Link, { to: "/file-module-list/" },
                                React.createElement("span", null, "\u6587\u4EF6\u7BA1\u7406"))),
                        React.createElement(Item, null,
                            React.createElement(react_router_1.Link, { to: "#" }, "\u6A21\u5757\u540D\u79F01")),
                        React.createElement(Item, null,
                            React.createElement(react_router_1.Link, { to: "#" }, "\u6A21\u5757\u540D\u79F01")))))));
    }
}
exports.Header = Header;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
//# sourceMappingURL=Header.js.map