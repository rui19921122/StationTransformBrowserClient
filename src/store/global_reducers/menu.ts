/**
 * Created by Administrator on 2016/10/28.
 */

import fetch_api from './../../http/http'
import {createAction, handleActions} from 'redux-actions'
// ------------------------------------
// Constants
// ------------------------------------
export const update_menu_info = createAction("update_menu_info");

export const update_menu = () => {
  return (dispatch, getState) => {
    fetch_api(
      '/api/menu/', 'get'
    ).then(json=>dispatch(update_menu_info(json)))
  }
};

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
import {detailItemInterface, MenuItemInterface} from '../../api/menu';
export interface MenuStoreInterface {
  list: MenuItemInterface[],
  sort: detailItemInterface[],
  managed: number[]
}
let initial_state: MenuStoreInterface = {
  list: [],
  sort: [],
  managed: []
};
export const actions = {
  update_menu
};
export default handleActions({
  update_menu_info: (state, action)=> {
    return Object.assign({}, state, {
      list: action.payload['items'],
      sort: action.payload['sort'],
      managed: action.payload['managed']
    })
  }
}, initial_state)
