import { Html, ap, contramap, name, of } from 'react-dream'
import { compose } from 'ramda'
import Article from './Article'
import Header from './Header'

import nChildren from './nChildren'
import withChildren from './withChildren'

const Blogroll = compose(
  name('Blogroll'),
  contramap(({articles}) => ({
    items: articles,
    wrapper: {}
  })),
  ap(Html.Section),
  ap(Article)
)(of(nChildren))

export default compose(
  name('Main'),
  contramap(({ title, tagline, articles }) => ({
    child: {
      items: [
        { title, tagline },
        { articles }
      ]
    }
  })),
  withChildren(Header, Blogroll)
)(Html.Main)
