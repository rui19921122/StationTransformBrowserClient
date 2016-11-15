"use strict";
var react_redux_1 = require('react-redux');
/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */
var view_1 = require('../components/view');
/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */
var mapStateToProps = function (state) { return ({
    menu: state.menu,
    location: state.location
}); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps)(view_1.default);
//# sourceMappingURL=container.js.map