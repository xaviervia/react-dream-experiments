import React from 'react'
import {render} from 'react-dom'
import Article from './Article'

render(
  <Article.Component
    title='lala'
    content='lorem ipsum'
  />,
  document.getElementById('root')
)
