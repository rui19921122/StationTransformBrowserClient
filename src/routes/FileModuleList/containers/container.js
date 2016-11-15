"use strict";
const react_redux_1 = require('react-redux');
const view_1 = require('../components/view');
const mapStateToProps = (state) => ({
    menu: state.menu,
    articles: state.articles,
    location: state.location
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(view_1.default);
//# sourceMappingURL=container.js.map