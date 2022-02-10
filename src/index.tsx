import { StrictMode } from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import { STORE } from './redux'

import { App } from './App'

render(
  <StrictMode>
    <Provider store={ STORE() }>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)
