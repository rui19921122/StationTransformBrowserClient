"use strict";
const react_redux_1 = require("react-redux");
/*  This is a container component. Notice it does not contain any JSX,
 nor does it import React. This component is **only** responsible for
 wiring in the actions and state necessary to render a presentational
 component - in this case, the counter:   */
const view_1 = require("../components/view");
/*  Object of action creators (can also be function that returns object).
 Keys will be passed as props to presentational components. Here we are
 implementing our wrapper around increment; the component doesn't care   */
const mapStateToProps = (state) => ({
    menu: state.menu,
    location: state.location,
    edit_article: state.edit_article,
    user: state.user
});
Object.defineProperty(exports, "__esModule", { value: true });
/*  Note: mapStateToProps is where you should use `reselect` to create selectors, ie:

 import { createSelector } from 'reselect'
 const counter = (state) => state.counter
 const tripleCount = createSelector(counter, (count) => count * 3)
 const mapStateToProps = (state) => ({
 counter: tripleCount(state)
 })

 Selectors can compute derived data, allowing Redux to store the minimal possible state.
 Selectors are efficient. A selector is not recomputed unless one of its arguments change.
 Selectors are composable. They can be used as input to other selectors.
 https://github.com/reactjs/reselect    */
exports.default = react_redux_1.connect(mapStateToProps)(view_1.default);
//# sourceMappingURL=container.js.map