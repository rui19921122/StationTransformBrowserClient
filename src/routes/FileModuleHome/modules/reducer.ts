// ------------------------------------
// Constants
// ------------------------------------
import fetch_api from '../../../http/http';
import {ArticleDetailInterface} from '../../../api/article';
import {createAction, handleActions} from 'redux-actions'

// ------------------------------------
// Actions
// ------------------------------------

const update_articles = createAction('update_articles');
export const get_articles = (pk: number) => {
  let id: number;
  if (pk) {
    id = pk
  } else {
    id = 0
  }
  return (dispatch, getState) => {
    fetch_api(url, 'get').then(json=>console.log(json))
  }
};

export const actions = {
  get_articles
};

// ------------------------------------
// Action Handlers
// ------------------------------------
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  articles: []
};
export interface ListArticlesStoreInterface {
  articles: ArticleDetailInterface[],
  fetching: boolean
}
export default handleActions({
  update_articles: (state, action)=> {
    return Object.assign({}, state, action.payload)
  }
}, initialState)
