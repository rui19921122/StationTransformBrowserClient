// ------------------------------------
// Constants
// ------------------------------------
import fetch_api from '../../../http/http';
import {message} from 'antd';
import {ArticleDetailInterface} from '../../../api/article';
import {createAction, handleActions} from 'redux-actions'

// ------------------------------------
// Actions
// ------------------------------------

const update_article = createAction('update_article');
const update_files = createAction('update_files');
export const check_permission = (id: number) => {
  return (dispatch, getState) => {
    dispatch(update_article()); // 初始化
    const url = `/api/article/${id}/edit/`;
    fetch_api(url, 'get').then(json=>dispatch(update_article(json)))
  }
};
export const put_article = (title: string, article_id: number, content: string) => {
  return (dispatch, getState) => {
    const url = `/api/article/${article_id}/`;
    fetch_api(url, 'put', false, {}, JSON.stringify({
      name: title,
      content: content || ''
    })).then(json=> {
      dispatch(update_article(json));
      message.success('更新成功')
    })
  }
};
export const delete_file = (id: number, article_id: number) => {
  return (dispatch, getState)=> {
    const url = `/api/article/file/${id}/`;
    const state = getState();
    fetch_api(url, 'delete').then(
      json=> {
        dispatch(reload_files(article_id));
        message.success("删除成功")
      }
    )
  }
};
export const reload_files = (id: number)=> {
  return (dispatch, getState)=> {
    const url = `/api/article/${id}/files/`;
    fetch_api(url, 'get').then(
      json=> {
        dispatch(update_files(json))
      }
    )
  }
}

export const actions = {
  update_article,
  check_permission,
  put_article,
  delete_file,
  reload_files
};

// ------------------------------------
// Action Handlers
// ------------------------------------
// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  fetching: false,
  article: {}
};
export interface EditArticleInterface {
  article: ArticleDetailInterface,
  fetching: boolean
}

export default handleActions({
  update_article: (state, action)=> {
    return Object.assign({}, state, {article: action.payload})
  },
  update_files: (state, action)=> {
    let _article = state.article;
    _article['files'] = action.payload;
    return Object.assign({}, state, _article)
  }
}, initialState)
