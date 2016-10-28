import fetch_api from '../../http'

/**
 * Created by Administrator on 2016/10/25.
 */
// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_MENU_DETAIL = 'UPDATE_MENU_DETAIL';

// ------------------------------------
// Actions
// ------------------------------------

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export const GetMenuFromServer = ()=> {
  return (dispatch, getState)=> {
    fetch_api('/auth/user/', 'get').then(json=>dispatch(UPDATE_MENU_DETAIL, json));
  }
};

export const actions = {
  GetMenuFromServer,
  UPDATE_MENU_DETAIL
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_MENU_DETAIL]: (state, action) => Object.assign({}, state, action)
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  menu: {},
  list: []
};
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state
}
