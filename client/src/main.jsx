import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { TransactionsProvider } from './context/TransactionContext';
import { Provider } from 'react-redux';

import store from './app/store'



ReactDOM.render(
  <Provider store={store}>

  <TransactionsProvider>
      <App />
    </TransactionsProvider>
  </Provider>,
  document.getElementById('root')
)
