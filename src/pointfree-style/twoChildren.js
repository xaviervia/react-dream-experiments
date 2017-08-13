import React from 'react'

export default North => South => Wrapper => ({north, south, wrapper}) =>
  <Wrapper {...wrapper}>
    <North {...north} />
    <South {...south} />
  </Wrapper>
