import React from 'react'

export default Child => Parent => ({child, parent}) =>
  <Parent {...parent}>
    <Child {...child} />
  </Parent>
