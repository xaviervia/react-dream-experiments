import React from 'react'
import {render} from 'react-dom'
import Header from './Header'

render(
  <Header.Component
    title='lala'
    tagline='lorem ipsum'
  />,
  document.getElementById('root')
)
