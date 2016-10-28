import {injectReducer} from '../../store/reducers'

export default (store) => ({
  path: 'file-module',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
  }
})
