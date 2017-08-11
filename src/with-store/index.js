import React, {Component} from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import App from './App'

const withReduxStore = ({dispatch, getState, subscribe}) => Target =>
  class extends Component {
    constructor () {
      super()
      this.state = { storeState: getState() }
      subscribe(() => this.setState({ storeState: getState() }))
    }

    render () {
      return <Target {...this.state.storeState} dispatch={dispatch} />
    }
  }

const reducer = (state = {counter: 0}, action) => {
  switch (action.type) {
    case 'ADD_ONE':
      return { counter: state.counter + 1 }
    default:
      return state
  }
}

const store = createStore(reducer)

App
  .map(withReduxStore(store))
  .fork(AppComponent => render(
    <AppComponent />,
    document.getElementById('root')
  ))
