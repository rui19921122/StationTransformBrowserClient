"use strict";
const react_1 = require("react");
const react_router_1 = require("react-router");
const react_redux_1 = require("react-redux");
class AppContainer extends react_1.Component {
    shouldComponentUpdate() {
        return false;
    }
    render() {
        const { routes, store, history } = this.props;
        return (react_1.default.createElement(react_redux_1.Provider, {store: store}, 
            react_1.default.createElement("div", {style: { height: '100%' }}, 
                react_1.default.createElement(react_router_1.Router, {history: history, children: routes})
            )
        ));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppContainer;
//# sourceMappingURL=AppContainer.js.map