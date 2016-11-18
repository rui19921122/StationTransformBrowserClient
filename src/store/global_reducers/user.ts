/**
 * Created by Administrator on 2016/10/28.
 */
import fetch_api from "./../../http/http";
import {createAction, handleActions} from "redux-actions";
// ------------------------------------
// Constants
// ------------------------------------
export const update_user_info = createAction("UPDATE_USER_INFO");
export const update_fetching = createAction("update_fetching");

export const update_user = () => {
  return (dispatch, getState) => {
    dispatch(update_fetching(true));
    fetch_api(
      '/api/user/info/', 'get', true
    ).then(res => {
      if ((res as any).status === 200) {
        dispatch(update_fetching(false));
        (res as any).json().then(json => dispatch(update_user_info(json)))
      } else {
        dispatch(update_fetching(false))
      }
    })
  }
};
export const login = (username: string, password: string) => {
  return (dispatch, getState) => {
    dispatch(update_fetching(true));
    console.log("begin fetching");
    fetch_api(
      '/api/auth/login/', 'post', false, {}, JSON.stringify({username, password})
    ).then(json => {
        dispatch(update_fetching(false));
        dispatch(update_user());
      }
    ).catch(e => dispatch(update_fetching(false))
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
  managed_menu: number[],
  admin_menu: number[],
  fetching: boolean,
  is_superuser: boolean
}
const initialState = {
  name: '',
  managed_menu: [],
  admin_menu: [],
  fetching: false,
  is_superuser: false
};
export default handleActions<UserStoreInterface,any>({
  UPDATE_USER_INFO: (state, action) => {
    return Object.assign({}, state, {
      name: action.payload['name'],
      managed_menu: action.payload['owner_menu'],
      admin_menu: action.payload['admin_menu'],
      is_superuser: action.payload['is_admin']
    })
  },
  update_fetching: (state, action) => {
    return Object.assign({}, state, {fetching: action.payload})
  }
}, initialState)
