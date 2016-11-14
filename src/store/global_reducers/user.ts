/**
 * Created by Administrator on 2016/10/28.
 */

import fetch_api from './../../http/http'
import {createAction, handleActions} from 'redux-actions'
// ------------------------------------
// Constants
// ------------------------------------
export const update_user_info = createAction("UPDATE_USER_INFO");
export const update_fetching = createAction("update_fetching");

export const update_user = () => {
    return (dispatch, getState) => {
        dispatch(update_fetching(true));
        fetch_api(
            '/api/auth/user/', 'get', true
        ).then(res=> {
            if (res.status === 200) {
                dispatch(update_fetching(false));
                res.json().then(json=>dispatch(update_user_info(json)))
            } else {
                dispatch(update_fetching(false))
            }
        })
    }
};
export const login = (username: string, password: string) => {
    return (dispatch, getState)=> {
        dispatch(update_fetching(true));
        fetch_api(
            '/api/auth/login/', 'post', false, {}, JSON.stringify({username, password})
        ).then(json=> {
                dispatch(update_user());
                dispatch(update_fetching(false));
            }
        ).catch(
            dispatch(update_fetching(false))
        )
    }
};
export const actions = {
    update_user,
    login
};

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
export interface UserStoreInterface {
    name: string|void,
    department: string|void,
    managed_menu: number[],
    admin_menu: number[],
    fetching: boolean
}
const initialState = {
    name: undefined,
    department: undefined,
    managed_menu: [],
    admin_menu: [],
    fetching: false
};
export default handleActions({
    UPDATE_USER_INFO: (state, action)=> {
        return Object.assign({}, state, {
            name: action.payload['username'],
            department: action.payload['department'],
            managed_menu: action.payload['managed_menu'],
            admin_menu: action.payload['admin_menu']
        })
    },
    update_fetching: (state, action)=> {
        return Object.assign({}, state, {fetching: action.payload})
    }
}, initialState)
