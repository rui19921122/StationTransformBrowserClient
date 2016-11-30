import * as React from "react";
import {Router} from "react-router";
import {Provider} from "react-redux";

class AppContainer extends React.Component<any,any> {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const {routes, store, history} = this.props

    return (
      <Provider store={store}>
        <div style={{height: '100%'}}>
          <Router history={history} children={routes}/>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
