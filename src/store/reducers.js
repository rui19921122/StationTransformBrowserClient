import {combineReducers} from 'redux'
import locationReducer from './location'
import UserReducer from './global_reducers/user'
import MenuReducer from './global_reducers/menu'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    user: UserReducer,
    menu: MenuReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
