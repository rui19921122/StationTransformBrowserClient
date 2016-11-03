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
export const new_article = (title: string, menu: number, content: string) => {
  return (dispatch, getState) => {
    const url = `/api/menu/${menu}/articles/`;
    fetch_api(url, 'post', false, {}, JSON.stringify({name: title, content: content||''})).then(json=>console.log(json))
  }
};

export const actions = {
  new_article,
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
