import React, {Component, PropTypes} from 'react'
import {browserHistory, Router, hashHistory} from 'react-router'
import {Provider} from 'react-redux'

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const {routes, store} = this.props

    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Router history={hashHistory} children={routes} dispatch={store.dispatch}/>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
