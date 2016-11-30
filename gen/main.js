"use strict";
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const createStore_1 = require("src/store/createStore");
const AppContainer_1 = require("src/containers/AppContainer");
const react_router_redux_1 = require("react-router-redux");
const react_router_1 = require("react-router");
require("./styles/_core.less");
const routes_1 = require("src/routes");
const redbox_react_1 = require("redbox-react");
// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const store = createStore_1.default(initialState);
const history = react_router_redux_1.syncHistoryWithStore(react_router_1.hashHistory, store);
// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');
let render = () => {
    const routes = routes_1.createRoutes(store);
    react_dom_1.default.render(react_1.default.createElement(AppContainer_1.default, {store: store, routes: routes, history: history}), MOUNT_NODE);
};
// ========================================================
// Developer Tools Setup
// ========================================================
// This code is excluded from production bundle
if (__DEV__) {
    if (module.hot) {
        // Development render functions
        const renderApp = render;
        const renderError = (error) => {
            react_dom_1.default.render(react_1.default.createElement(redbox_react_1.default, {error: error}), MOUNT_NODE);
        };
        // Wrap render in try/catch
        render = () => {
            try {
                renderApp();
            }
            catch (error) {
                renderError(error);
            }
        };
        // Setup hot module replacement
        module.hot.accept('./routes/index', () => setImmediate(() => {
            react_dom_1.default.unmountComponentAtNode(MOUNT_NODE);
            render();
        }));
    }
}
// ========================================================
// Go!
// ========================================================
render();
//# sourceMappingURL=main.js.map