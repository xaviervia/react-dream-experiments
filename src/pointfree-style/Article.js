import { Html, ap, contramap, name, of } from 'react-dream'
import { compose } from 'ramda'

import twoChildren from './twoChildren'

const Title = name('Title')(Html.H2)

const Content = name('Content')(Html.P)

export default compose(
  name('BlogPost'),
  contramap(({title, content}) => ({
    north: { children: title },
    south: { children: content }
  })),
  ap(Html.Article),
  ap(Content),
  ap(Title)
)(of(twoChildren))
