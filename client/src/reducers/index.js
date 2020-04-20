import { combineReducers } from 'redux'

import user from './user'
import teams from './teams'
import widgets from './widgets'

const rootReducer = combineReducers({
  teams,
  user,
  widgets,
})

export default rootReducer
