import { combineReducers } from 'redux'

import login from './login'
import teams from './teams'
import widgets from './widgets'
import profile from './profile'

const rootReducer = combineReducers({
  teams,
  login,
  widgets,
  profile,
})

export default rootReducer
