/**
 * Created by Administrator on 2016/10/28.
 */

import fetch_api from "./../../http/http";
import {createAction, handleActions} from "redux-actions";
import {detailItemInterface, MenuItemInterface} from "../../api/menu";
import {Modal, message} from 'antd';
// ------------------------------------
// Constants
// ------------------------------------
export const change_store_without_api = createAction("change_store_without_api");
export const update_menu_info = createAction("update_menu_info");
export const change_add_fetching = createAction("change_add_fetching");

export const update_menu = () => {
    return (dispatch, getState) => {
        fetch_api(
            '/api/menu/', 'get'
        ).then(json=>dispatch(update_menu_info(json)))
    }
};

export const add_menu = (content: string, parent?: number) => {
    return (dispatch, getState) => {
        let url: string;
        if (!parent) {
            url = '/api/menu/'
        } else {
            url = '/api/menu/' + parent + '/children/'
        }
        parent ? dispatch(change_add_fetching(true)) :
            dispatch(change_store_without_api(['adding_root_fetching', true]));
        fetch_api(
            url, 'post', false, {}, JSON.stringify({name: content})
        ).then(json=> {
            if (parent) {
                dispatch(change_add_fetching(false))
            } else {
                dispatch(change_store_without_api(['adding_root_fetching', false]));
                dispatch(change_store_without_api(['adding_content', '']));
            }
            return dispatch(update_menu())
        }).catch(e=>dispatch(change_add_fetching(false)))
    }
};
export const delete_menu = (id) => {
    return (dispatch, getState) => {
        let url = `/api/menu/${id}/`;
        Modal.confirm({
            'title': '您确认要删除这个目录吗',
            'content': '该目录下的所有文章及子目录均会被删除,请确认无误后再删除',
            onOk: ()=> {
                fetch_api(url, 'delete').then(
                    json=> {
                        message.success("删除成功");
                        dispatch(update_menu());
                    }
                )
            },
            onCancel: ()=> {
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
    }
};

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
export interface MenuStoreInterface {
    display_edit: boolean,
    root_managed: boolean,
    list: MenuItemInterface[],
    sort: detailItemInterface[],
    managed: number[],
    add_fetching: boolean,
    show_add_modal: boolean,
    show_admin_modal: boolean,
    admin_fetching: boolean,
    adding_content: string,
    adding_root_fetching: boolean,
    convert_modal_visible: boolean

}
let initial_state: MenuStoreInterface = {
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
export const actions = {
    update_menu,
    add_menu,
    delete_menu,
    change_store_without_api
};
export default handleActions({
    update_menu_info: (state, action)=> {
        return Object.assign({}, state, {
            list: action.payload['items'],
            sort: action.payload['sort'],
            managed: action.payload['managed'],
            root_managed: action.payload['root_managed']
        })
    },
    change_add_fetching: (state, action) => {
        return Object.assign({}, state, {add_fetching: action.payload})
    },
    change_store_without_api: (state, action)=> {
        const type = action.payload[0];
        const payload = action.payload[1];
        let _new = {};
        _new['' + type] = payload;
        return Object.assign({}, state, _new)

    }
}, initial_state)
