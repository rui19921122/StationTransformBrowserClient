"use strict";
const react_1 = require('react');
const Header_1 = require('../../components/Header');
require('./CoreLayout.scss');
require('../../styles/core.scss');
exports.CoreLayout = ({ children }) => (react_1.default.createElement("div", {className: 'page-wrapper'}, react_1.default.createElement(Header_1.default, null), react_1.default.createElement("div", {className: 'main-wrapper'}, children)));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.CoreLayout;
