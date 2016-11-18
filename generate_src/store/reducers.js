import {combineReducers} from 'redux'
import locationReducer from './location'
import UserReducer from './global_reducers/user'
import MenuReducer from './global_reducers/menu'
import ArticlesReducer from './global_reducers/articles'
import {routerReducer} from 'react-router-redux'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    user: UserReducer,
    menu: MenuReducer,
    articles: ArticlesReducer,
    routing:routerReducer,
    ...asyncReducers
  })
};

export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
};

export default makeRootReducer
