import { ap, contramap, name, map, of } from 'react-dream'
import { compose } from 'ramda'
import { withHoverProps } from '@klarna/higher-order-components'
import listOf from './listOf'
import Title from './Title'
import Tagline from './Tagline'

const Header = compose(
  map(withHoverProps({hovered: true})),
  name('Header'),
  contramap(({ title, tagline, ...props }) => ({
    items: [
      { children: title, ...props },
      { children: tagline, ...props }
    ]
  })),
  ap(Tagline),
  ap(Title)
)(of(listOf(2)))

export default Header
