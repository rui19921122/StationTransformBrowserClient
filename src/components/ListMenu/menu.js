"use strict";
const MenuActions_1 = require('./MenuActions');
exports.ListMenu = (props) => {
    props.dispatch(MenuActions_1.actions.GetMenuFromServer());
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.ListMenu;
