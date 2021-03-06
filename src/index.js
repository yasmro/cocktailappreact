import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'connected-react-router';
// import createBrowserHistory from 'history/createBrowserHistory';
// import createStore from './modules/store/Store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// const history = createBrowserHistory();
// const store = createStore(history);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
