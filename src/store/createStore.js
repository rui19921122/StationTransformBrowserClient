"use strict";
const redux_1 = require("redux");
const redux_thunk_1 = require("redux-thunk");
const react_router_1 = require("react-router");
const reducers_1 = require("./reducers");
const react_router_redux_1 = require("react-router-redux");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [redux_thunk_1.default, react_router_redux_1.routerMiddleware(react_router_1.hashHistory)];
    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];
    if (__DEV__) {
        const devToolsExtension = window.devToolsExtension;
        if (typeof devToolsExtension === 'function') {
            enhancers.push(devToolsExtension());
        }
    }
    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = redux_1.createStore(reducers_1.default(), initialState, redux_1.compose(redux_1.applyMiddleware(...middleware), ...enhancers));
    store.asyncReducers = {};
    // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
    // store.unsubscribeHistory = hashHistory.listen(updateLocation(store));
    if (module.hot) {
        module.hot.accept('./reducers', () => {
            const reducers = require('./reducers').default;
            store.replaceReducer(reducers(store.asyncReducers));
        });
    }
    return store;
};
//# sourceMappingURL=createStore.js.map