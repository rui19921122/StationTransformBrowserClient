/**
 * Created by Administrator on 2016/10/28.
 */

import fetch_api from './../../http/http'
import {createAction, handleActions} from 'redux-actions'
// ------------------------------------
// Constants
// ------------------------------------
export const update_user_info = createAction("UPDATE_USER_INFO");

export const update_user = () => {
  return (dispatch, getState) => {
    fetch_api(
      'auth/user', 'get'
    ).then(json=>dispatch(update_user_info(json)))

  }
};

// ------------------------------------
// Specialized Action Creator
// ------------------------------------

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  UPDATE_USER_INFO: (state, action)=> {
    return Object.assign({}, state, {user: action.payload})
  }
}, {})
