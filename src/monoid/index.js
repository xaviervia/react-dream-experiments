import React from 'react'
import {render} from 'react-dom'
import { Html, empty } from 'react-dream'
import { List } from 'immutable-ext'

const Header = List([
    Html.H1.contramap(({title}) => ({children: title})),
    Html.P.contramap(({description}) => ({children: description})),
    Html.H2.contramap(({tagline}) => ({children: tagline})),
  ])
  .fold(empty)

render(
  <Header.Component
    title='Hello'
    description='World!'
    tagline='of Fantasy!'
  />,
  document.getElementById('root')
)
