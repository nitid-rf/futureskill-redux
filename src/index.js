import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import { history } from './store'
import App from './containers/app'

import 'sanitize.css/sanitize.css'
import './index.css'

// import { createStore } from 'redux';

// import BookReducer from './BookReducer';

// const store = createStore(BookReducer); 
// const target = document.querySelector('#root')

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  //  target
  document.querySelector('#root')
)
