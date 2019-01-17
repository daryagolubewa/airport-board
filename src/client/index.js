import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import reducers from './redux/reducers';
import App from './components/app/app';

const history = createBrowserHistory();

const store = createStore(
  reducers(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const Index = () => (
  <Provider store={ store }>
   <App />
  </Provider>
);

ReactDOM.render(<Index />, document.getElementById('react-app'));

