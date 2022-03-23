import './reset.css'
import './index.css'
import App from './App'
import React from 'react'
import { rootReducer } from './reducers/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(rootReducer)

const Store = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Store
