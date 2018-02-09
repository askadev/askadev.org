import { combineReducers } from 'redux'
import events from './events'
import regions from './regions'
import skills from './skills'
import users from './users'

export default combineReducers({
  events,
  regions,
  skills,
  users
})
