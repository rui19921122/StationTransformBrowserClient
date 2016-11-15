import fetch_api from '../../../http/http';
import { createAction, handleActions } from 'redux-actions';
const update_articles = createAction('update_articles');
export const get_articles = (url) => {
    return (dispatch, getState) => {
        fetch_api(url, 'get').then(json => console.log(json));
    };
};
export const actions = {
    get_articles
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