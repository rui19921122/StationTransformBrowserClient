/**
 * Created by Administrator on 2016/10/28.
 * 与文章有关的模块
 */

import fetch_api from "./../../http/http";
import {createAction, handleActions} from "redux-actions";
import {ArticleDetailInterface} from "../../api/article";
import {url_function} from '../../url/url'
import {Modal, message} from 'antd';
import * as moment from 'moment'
// ------------------------------------
// Constants
// ------------------------------------
export const change_store_without_api = createAction("change_store_without_api");

export const get_articles = (pk: number, content?: string, start?: moment.Moment, end?: moment.Moment) => {
  return (dispatch, getState) => {
    let url: url_function;
    url = new url_function(pk == 0 ? `/api/menu/articles/` : `/api/menu/${pk}/articles/`);
    if (content) {
      url.addParams('search', content)
    }
    if (start) {
      url.addParams('start', start.format("YYYY-MM-DD"))
    }
    if (end) {
      url.addParams('end', end.format("YYYY-MM-DD"))
    }
    dispatch(actions.change_store_without_api(['fetching_articles', true]));
    fetch_api(
      url.toString(), 'get'
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
    }).catch(
      dispatch(actions.change_store_without_api(
        ['fetching_articles', false]
      ))
    )
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
