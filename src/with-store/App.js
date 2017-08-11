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
