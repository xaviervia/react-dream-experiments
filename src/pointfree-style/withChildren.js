import {of} from 'react-dream'
import {reduce} from 'ramda'
import withChild from './withChild'
import listOf from './listOf'

export default (...Children) => Parent =>
  of(withChild)
  .ap(
    reduce(
      (acc, Child) => acc.ap(Child),
      of(listOf(Children.length)),
      Children
    )
  )
  .ap(Parent)
