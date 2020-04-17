import { combineReducers } from 'redux'
import user from './user'
import widgets from './widgets'

const rootReducer = combineReducers({
  user,
  widgets,
})

export default rootReducer
