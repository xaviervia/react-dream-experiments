import React from 'react'

export default Item => Wrapper => ({items, wrapper}) =>
  <Wrapper {...wrapper}>
    {items.map((item, index) => <Item key={index} {...item} />)}
  </Wrapper>
