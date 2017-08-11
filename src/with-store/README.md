**index.js**

```js
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
```

**App.js**
```js
import React from 'react'
import { Html, of } from 'react-dream'

const twoElements = North => South => ({north, south}) => [
  <North key={'north'} {...north} />,
  <South key={'south'} {...south} />
]

const CounterText = Html.P
  .style(() => ({ fontFamily: 'sans-serif', color: 'darkslategray' }))
  .contramap(({counter}) => ({
    children: `Counter: ${counter}`
  }))
  .name('CounterText')

const PlusOne = Html.Button
  .style(() => ({ cursor: 'pointer' }))
  .contramap(({onAddOne}) => ({
    children: 'Add One',
    onClick: onAddOne
  }))
  .name('PlusOne')

export default of(twoElements)
  .ap(CounterText)
  .ap(PlusOne)
  .contramap(({dispatch, counter}) => ({
    north: { counter },
    south: {
      onAddOne: () => dispatch({ type: 'ADD_ONE' })
    }
  }))
  .name('App')
```
