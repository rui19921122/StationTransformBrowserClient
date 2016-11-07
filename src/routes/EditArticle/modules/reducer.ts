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
export const check_permission = (id: number) => {
    return (dispatch, getState) => {
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
export const delete_file = (id: number) => {
    return (dispatch, getState)=> {
        const url = `/api/article/file/${id}/`;
        fetch_api(url, 'delete').then(
            json=> {
                dispatch(check_permission());
                message.success("删除成功")
            }
        )
    }
}

export const actions = {
    update_article,
    check_permission,
    put_article,
    delete_file
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
    }
}, initialState)
