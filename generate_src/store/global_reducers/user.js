"use strict";
/**
 * Created by Administrator on 2016/10/28.
 */
const http_1 = require("./../../http/http");
const redux_actions_1 = require("redux-actions");
// ------------------------------------
// Constants
// ------------------------------------
exports.update_user_info = redux_actions_1.createAction("UPDATE_USER_INFO");
exports.update_fetching = redux_actions_1.createAction("update_fetching");
exports.update_user = () => {
    return (dispatch, getState) => {
        dispatch(exports.update_fetching(true));
        http_1.default('/api/user/info/', 'get', true).then(res => {
            if (res.status === 200) {
                dispatch(exports.update_fetching(false));
                res.json().then(json => dispatch(exports.update_user_info(json)));
            }
            else {
                dispatch(exports.update_fetching(false));
            }
        });
    };
};
exports.login = (username, password) => {
    return (dispatch, getState) => {
        dispatch(exports.update_fetching(true));
        console.log("begin fetching");
        http_1.default('/api/auth/login/', 'post', false, {}, JSON.stringify({ username, password })).then(json => {
            dispatch(exports.update_fetching(false));
            dispatch(exports.update_user());
        }).catch(e => dispatch(exports.update_fetching(false)));
    };
};
exports.actions = {
    update_user: exports.update_user,
    login: exports.login
};
const initialState = {
    name: '',
    managed_menu: [],
    admin_menu: [],
    fetching: false,
    is_superuser: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    UPDATE_USER_INFO: (state, action) => {
        return Object.assign({}, state, {
            name: action.payload['name'],
            managed_menu: action.payload['owner_menu'],
            admin_menu: action.payload['admin_menu'],
            is_superuser: action.payload['is_admin']
        });
    },
    update_fetching: (state, action) => {
        return Object.assign({}, state, { fetching: action.payload });
    }
}, initialState);
//# sourceMappingURL=user.js.map