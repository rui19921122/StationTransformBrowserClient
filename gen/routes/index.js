"use strict";
// We only need to import the modules necessary for initial render
const CoreLayout_1 = require("../layouts/CoreLayout/CoreLayout");
const Home_1 = require("./Home");
const FileModuleHome_1 = require("./FileModuleHome");
const Counter_1 = require("./Counter");
const FileModuleList_1 = require("./FileModuleList");
const AddArticle_1 = require("./AddArticle");
const EditArticle_1 = require("./EditArticle");
/*  Note: Instead of using JSX, we recommend using react-router
 PlainRoute objects to build route definitions.   */
exports.createRoutes = (store) => ({
    path: '/',
    component: CoreLayout_1.default,
    indexRoute: Home_1.default,
    childRoutes: [
        Counter_1.default(store),
        FileModuleHome_1.default(store),
        FileModuleList_1.default(store),
        AddArticle_1.default(store),
        EditArticle_1.default(store)
    ]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.createRoutes;
//# sourceMappingURL=index.js.map