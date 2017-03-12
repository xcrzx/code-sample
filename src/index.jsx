import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App'
import './styles/global.scss'

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    document.querySelector('#root'),
  )
}

render()

if (module.hot) {
  module.hot.accept('./App', render)
}
