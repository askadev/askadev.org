import { combineReducers } from 'redux'
import auth from './auth'
import events from './events'
import regions from './regions'
import skills from './skills'
import users from './users'

export default combineReducers({
  auth,
  events,
  regions,
  skills,
  users
})
