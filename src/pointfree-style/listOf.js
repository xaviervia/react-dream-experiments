import React from 'react'
import {curryN} from 'ramda'

export default n => curryN(n, (...Items) => ({items}) =>
  items.map((item, index) => {
    const Item = Items[index]

    return <Item key={index} {...item} />
  }))
