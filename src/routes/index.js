"use strict";
// We only need to import the modules necessary for initial render
const CoreLayout_1 = require('../layouts/CoreLayout/CoreLayout');
const Home_1 = require('./Home');
const Counter_1 = require('./Counter');
const FileModuleHome_1 = require('./FileModuleHome');
/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */
exports.createRoutes = (store) => ({
    path: '/',
    component: CoreLayout_1.default,
    indexRoute: Home_1.default,
    childRoutes: [
        Counter_1.default(store),
        FileModuleHome_1.default(store)
    ]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.createRoutes;
