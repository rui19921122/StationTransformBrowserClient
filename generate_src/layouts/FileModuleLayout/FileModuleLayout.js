"use strict";
const React = require("react");
const menu_1 = require("components/ListMenu/menu");
const antd_1 = require("antd");
require("../../styles/core.scss");
class FileModuleLayout extends React.Component {
    render() {
        return (React.createElement(antd_1.Row, { style: { minHeight: '700px' } },
            React.createElement(antd_1.Col, { span: 4 },
                React.createElement(menu_1.ListMenu, { dispatch: this.props.dispatch, menu: this.props.menu, user: this.props.user })),
            React.createElement(antd_1.Col, { span: 20 }, this.props.children)));
    }
}
exports.FileModuleLayout = FileModuleLayout;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FileModuleLayout;
//# sourceMappingURL=FileModuleLayout.js.map