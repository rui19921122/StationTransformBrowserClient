import fetch_api from "./../../http/http";
import { createAction, handleActions } from "redux-actions";
import { url_function } from '../../url/url';
export const change_store_without_api = createAction("change_store_without_api");
export const get_articles = (pk, content, start, end) => {
    return (dispatch, getState) => {
        let url;
        url = new url_function(pk == 0 ? `/api/menu/articles/` : `/api/menu/${pk}/articles/`);
        if (content) {
            url.addParams('search', content);
        }
        if (start) {
            url.addParams('start', start.format("YYYY-MM-DD"));
        }
        if (end) {
            url.addParams('end', end.format("YYYY-MM-DD"));
        }
        dispatch(actions.change_store_without_api(['fetching_articles', true]));
        fetch_api(url.toString(), 'get').then(json => {
            dispatch(actions.change_store_without_api(['articles', json]));
            dispatch(actions.change_store_without_api(['count', json.length]));
            dispatch(actions.change_store_without_api(['fetching_articles', false]));
        }).catch(dispatch(actions.change_store_without_api(['fetching_articles', false])));
    };
};
export const actions = {
    change_store_without_api,
    get_articles
};
let initial_state = {
    articles: [],
    fetching_articles: false
};
export default handleActions({
    change_store_without_api: (state, action) => {
        const type = action.payload[0];
        const payload = action.payload[1];
        let _new = {};
        _new['' + type] = payload;
        return Object.assign({}, state, _new);
    }
}, initial_state);
//# sourceMappingURL=articles.js.map