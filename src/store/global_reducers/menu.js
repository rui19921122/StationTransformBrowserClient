/**
 * Created by Administrator on 2016/10/28.
 */
"use strict";
const http_1 = require("./../../http/http");
const redux_actions_1 = require("redux-actions");
const antd_1 = require('antd');
// ------------------------------------
// Constants
// ------------------------------------
exports.change_store_without_api = redux_actions_1.createAction("change_store_without_api");
exports.update_menu_info = redux_actions_1.createAction("update_menu_info");
exports.change_add_fetching = redux_actions_1.createAction("change_add_fetching");
exports.update_menu = () => {
    return (dispatch, getState) => {
        http_1.default('/api/menu/', 'get').then(json => dispatch(exports.update_menu_info(json)));
    };
};
exports.add_menu = (content, parent) => {
    return (dispatch, getState) => {
        let url;
        if (!parent) {
            url = '/api/menu/';
        }
        else {
            url = '/api/menu/' + parent + '/children/';
        }
        parent ? dispatch(exports.change_add_fetching(true)) :
            dispatch(exports.change_store_without_api(['adding_root_fetching', true]));
        http_1.default(url, 'post', false, {}, JSON.stringify({ name: content })).then(json => {
            if (parent) {
                dispatch(exports.change_add_fetching(false));
            }
            else {
                dispatch(exports.change_store_without_api(['adding_root_fetching', false]));
                dispatch(exports.change_store_without_api(['adding_content', '']));
            }
            return dispatch(exports.update_menu());
        }).catch(e => dispatch(exports.change_add_fetching(false)));
    };
};
exports.delete_menu = (id) => {
    return (dispatch, getState) => {
        let url = `/api/menu/${id}/`;
        antd_1.Modal.confirm({
            'title': '您确认要删除这个目录吗',
            'content': '该目录下的所有文章及子目录均会被删除,请确认无误后再删除',
            onOk: () => {
                http_1.default(url, 'delete').then(json => {
                    antd_1.message.success("删除成功");
                    dispatch(exports.update_menu());
                });
            },
            onCancel: () => {
            }
        });
        // parent ? dispatch(change_add_fetching(true)) :
        //     dispatch(change_store_without_api(['adding_root_fetching', true]));
        // fetch_api(
        //     url, 'post', false, {}, JSON.stringify({name: content})
        // ).then(json=> {
        //     if (parent) {
        //         dispatch(change_add_fetching(false))
        //     } else {
        //         dispatch(change_store_without_api(['adding_root_fetching', false]));
        //         dispatch(change_store_without_api(['adding_content', '']));
        //     }
        //     return dispatch(update_menu())
        // }).catch(e=>dispatch(change_add_fetching(false)))
    };
};
let initial_state = {
    list: [],
    sort: [],
    managed: [],
    show_add_modal: false,
    add_fetching: false,
    show_admin_modal: false,
    admin_fetching: false,
    display_edit: false,
    root_managed: false,
    adding_content: '',
    adding_root_fetching: false,
    convert_modal_visible: false
};
exports.actions = {
    update_menu: exports.update_menu,
    add_menu: exports.add_menu,
    delete_menu: exports.delete_menu,
    change_store_without_api: exports.change_store_without_api
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_actions_1.handleActions({
    update_menu_info: (state, action) => {
        return Object.assign({}, state, {
            list: action.payload['items'],
            sort: action.payload['sort'],
            managed: action.payload['managed'],
            root_managed: action.payload['root_managed']
        });
    },
    change_add_fetching: (state, action) => {
        return Object.assign({}, state, { add_fetching: action.payload });
    },
    change_store_without_api: (state, action) => {
        const type = action.payload[0];
        const payload = action.payload[1];
        let _new = {};
        _new['' + type] = payload;
        return Object.assign({}, state, _new);
    }
}, initial_state);
