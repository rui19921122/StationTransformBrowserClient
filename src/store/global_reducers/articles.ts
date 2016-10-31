/**
 * Created by Administrator on 2016/10/28.
 * 与文章有关的模块
 */

import fetch_api from "./../../http/http";
import {createAction, handleActions} from "redux-actions";
import {ArticleDetailInterface} from "../../api/article";
import {Modal, message} from 'antd';
// ------------------------------------
// Constants
// ------------------------------------
export const change_store_without_api = createAction("change_store_without_api");

export const get_articles = (pk: number) => {
  return (dispatch, getState) => {
    let url: string;
    url = pk == 0 ? `/api/menu/articles/` : `/api/menu/${pk}/articles/`;
    dispatch(actions.change_store_without_api(['fetching_articles', true]));
    fetch_api(
      url, 'get'
    ).then(json=> {
      dispatch(actions.change_store_without_api(
        ['articles', json]
      ));
      dispatch(actions.change_store_without_api(
        ['count', (json as ArticleDetailInterface[]).length]
      ));
      dispatch(actions.change_store_without_api(
        ['fetching_articles', false]
      ))
    })
  }
};

// ------------------------------------
// Reducer
// ------------------------------------
export interface ArticleStoreInterface {
  articles: ArticleDetailInterface[],
  fetching_articles: boolean,
}
export const actions = {
  change_store_without_api,
  get_articles
};
let initial_state: ArticleStoreInterface = {
  articles: [],
  fetching_articles: false
};
export default handleActions({
  change_store_without_api: (state, action)=> {
    const type = action.payload[0];
    const payload = action.payload[1];
    let _new = {};
    _new['' + type] = payload;
    return Object.assign({}, state, _new)

  }
}, initial_state)
