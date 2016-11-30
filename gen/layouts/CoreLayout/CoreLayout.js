"use strict";
const React = require('react');
const Header_1 = require('../../components/Header');
require('./CoreLayout.scss');
require('../../styles/core.scss');
const react_redux_1 = require('react-redux');
const mapStateToProps = (state) => ({
    user: state.user,
    dispatch: state.dispatch
});
exports.CoreLayout = ({ user, children, dispatch }) => {
    return (React.createElement("div", {className: 'page-wrapper'}, 
        React.createElement(Header_1.default, {user: user, dispatch: dispatch}), 
        React.createElement("div", {className: 'main-wrapper'}, children)));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(exports.CoreLayout);
//# sourceMappingURL=CoreLayout.js.map