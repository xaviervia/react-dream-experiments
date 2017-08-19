import React from 'react'
import {render} from 'react-dom'
import { Html } from 'react-dream'

const App = Html.Div
  .log(x => x)
  .log(props => `Now the props should be gone: ${Object.keys(props).join(', ')}`)
  .removeProps('a', 'c', 'randomProp')
  .log(x => x)
  .log(props => `The props right now are: ${Object.keys(props).join(', ')}`)
  .addProps(() => ({
    a: '1',
    c: '4'
  }))
  .fork(AppComponent => render(
    <AppComponent randomProp />,
    document.getElementById('root')
  ))
