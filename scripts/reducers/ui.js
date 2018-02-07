import * as types from '../constants/actionTypes'

const initialState = {
  addEvent: false,
  editProfile: false,
  editEvents: false,
  addUserName: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_UI:
      return {
        ...state,
        [action.func]: !state[action.func]
      }
    default:
      return state
  }
}
