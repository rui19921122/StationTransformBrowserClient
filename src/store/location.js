"use strict";
exports.LOCATION_CHANGE = 'LOCATION_CHANGE';
function locationChange(location = '/') {
    return {
        type: exports.LOCATION_CHANGE,
        payload: location
    };
}
exports.locationChange = locationChange;
exports.updateLocation = ({ dispatch }) => {
    return (nextLocation) => dispatch(locationChange(nextLocation));
};
const initialState = null;
function locationReducer(state = initialState, action) {
    return action.type === exports.LOCATION_CHANGE
        ? action.payload
        : state;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = locationReducer;
//# sourceMappingURL=location.js.map