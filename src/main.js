"use strict";
const ReactDOM = require("react-dom");
const createStore_1 = require("./store/createStore");
const react_router_redux_1 = require("react-router-redux");
const react_router_1 = require("react-router");
require("./styles/_core.less");
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
    const routes = require('./routes/index').default(store);
    ReactDOM.render(store, { store }, routes = { routes }, history = { history } /  > , MOUNT_NODE);
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
            const RedBox = require('redbox-react').default;
            ReactDOM.render(error, { error } /  > , MOUNT_NODE);
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
            ReactDOM.unmountComponentAtNode(MOUNT_NODE);
            render();
        }));
    }
}
// ========================================================
// Go!
// ========================================================
render();
//# sourceMappingURL=main.js.map