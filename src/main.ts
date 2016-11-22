import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createStore from './store/createStore'
import AppContainer from './containers/AppContainer'
import {syncHistoryWithStore} from 'react-router-redux'
import {hashHistory} from 'react-router'
import './styles/_core.less'

// ========================================================
// Store Instantiation
// ========================================================
const initialState = window.___INITIAL_STATE__;
const store = createStore(initialState);
const history = syncHistoryWithStore(hashHistory, store);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
	const routes = require('./routes/index').default(store);

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
			const RedBox = require('redbox-react').default;

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
