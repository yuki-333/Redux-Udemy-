
// index.js
import React, {Component} from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  reducer  from './src/reducers/index'
import App from './src/components/home'

const store = createStore(reducer)


export default class reduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
};