import React from 'react'
import {render} from 'react-dom'
import {Html, of} from 'react-dream'

const links = [
  'with-store',
  'pointfree-style'
]

const withChild = Child => Parent => ({child, parent}) =>
  <Parent {...parent}>
    <Child {...child} />
  </Parent>

const nChildren = Item => Wrapper => ({items, wrapper}) =>
  <Wrapper {...wrapper}>
    {items.map((item, index) => <Item key={index} {...item} />)}
  </Wrapper>

const Link = of(withChild)
  .ap(Html.A)
  .ap(Html.Li)
  .contramap(({name}) => ({
    child: { href: `./${name}/`, children: name }
  }))
  .name('Link')

const List = of(nChildren)
  .ap(Link)
  .ap(Html.Ul)
  .contramap(({items}) => ({
    items: items.map(name => ({name}))
  }))
  .name('List')

render(
  <List.Component items={links} />,
  document.getElementById('root')
)
