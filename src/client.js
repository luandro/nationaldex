import React from 'react'
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import returnStore from './store'
import App from './app'
const container = document.getElementById('root');
const store = returnStore();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
)