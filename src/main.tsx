
import * as React from "react";
import * as ReactDOM from "react-dom";
import createStore from "src/store/createStore";
import AppContainer from "src/containers/AppContainer";
import {syncHistoryWithStore} from "react-router-redux";
import {hashHistory} from "react-router";
import "./styles/_core.less";
import {createRoutes} from "src/routes";
import RedBox from "redbox-react";
declare let __DEV__: boolean;
declare let module: any;
// ========================================================
// Store Instantiation
// ========================================================
const initialState = (window as any).___INITIAL_STATE__;
const store = createStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  const routes = createRoutes(store);

  ReactDOM.render(
    <AppContainer store={store} routes={routes} history={history}/>,
    MOUNT_NODE
  )
};

// ========================================================
// Developer Tools Setup
// ========================================================

// This code is excluded from production bundle
if (__DEV__) {
  if (module.hot) {
    // Development render functions
    const renderApp = render;
    const renderError = (error) => {

      ReactDOM.render(<RedBox error={error}/>, MOUNT_NODE)
    };

    // Wrap render in try/catch
    render = () => {
      try {
        renderApp()
      } catch (error) {
        renderError(error)
      }
    };

    // Setup hot module replacement
    module.hot.accept('./routes/index', () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render()
      })
    )
  }
}

// ========================================================
// Go!
// ========================================================
render();
