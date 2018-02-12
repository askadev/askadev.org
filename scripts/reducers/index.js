import { combineReducers } from 'redux'
import events from './events'
import regions from './regions'
import users from './users'

export default combineReducers({
  events,
  regions,
  users
})
