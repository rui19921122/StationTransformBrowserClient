import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import {browserHistory,hashHistory} from 'react-router'
import makeRootReducer from './reducers'
import {routerMiddleware} from 'react-router-redux'
import {updateLocation} from './location'
declare const __DEV__:any;
declare const require:any;
declare const module:any;

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk,routerMiddleware(hashHistory)];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  if (__DEV__) {
    const devToolsExtension = (window as any).devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    (makeRootReducer as any)(),
    initialState,
    (compose as any)(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );
  (store as any).asyncReducers = {};

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  // store.unsubscribeHistory = hashHistory.listen(updateLocation(store));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default;
      store.replaceReducer(reducers((store as any).asyncReducers))
    })
  }

  return store
}
