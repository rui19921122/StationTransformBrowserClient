import fetch_api from '../../../http/http';
import { createAction, handleActions } from 'redux-actions';
import { push } from 'react-router-redux';
const update_articles = createAction('update_articles');
export const new_article = (title, menu, content) => {
    return (dispatch, getState) => {
        const url = `/api/menu/${menu}/articles/`;
        fetch_api(url, 'post', false, {}, JSON.stringify({ name: title, content: content || '' }))
            .then(json => dispatch(push(`/article/${json['id']}/edit/`)));
    };
};
export const actions = {
    new_article,
};
const initialState = {
    fetching: false,
    articles: []
};
export default handleActions({
    update_articles: (state, action) => {
        return Object.assign({}, state, action.payload);
    }
}, initialState);
//# sourceMappingURL=reducer.js.map