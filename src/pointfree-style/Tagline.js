import { Html, removeProps, style, name } from 'react-dream'
import { compose } from 'ramda'

export default compose(
  name('Tagline'),
  style(({ hovered }) => ({ color: hovered ? 'red' : 'black' })),
  removeProps('hovered')
)(Html.P)
