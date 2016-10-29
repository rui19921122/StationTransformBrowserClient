"use strict";
const redux_1 = require('redux');
const location_1 = require('./location');
const user_1 = require('./global_reducers/user');
const menu_1 = require('./global_reducers/menu');
exports.makeRootReducer = (asyncReducers) => {
    return redux_1.combineReducers({
        location: location_1.default,
        user: user_1.default,
        menu: menu_1.default, }, ...asyncReducers);
};
;
exports.injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(exports.makeRootReducer(store.asyncReducers));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = exports.makeRootReducer;
