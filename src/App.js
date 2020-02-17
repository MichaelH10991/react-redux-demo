import React from 'react'
import { render } from 'react-dom'
import { provider } from 'react-redux'
import store from './js/store/redux'
import App from './js/components'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
