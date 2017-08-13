import { compose } from 'ramda'
import { Html, removeProps, style, name } from 'react-dream'

export default compose(
  name('Title'),
  style(({ hovered }) => ({ color: hovered ? 'red' : 'black' })),
  removeProps('hovered')
)(Html.H1)
