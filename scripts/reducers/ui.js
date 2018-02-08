import * as types from '../constants/actionTypes'

const initialState = {
  addEvent: false,
  editProfile: false,
  editEvents: false,
  addUserName: false,
  addRegion: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_UI:
      return {
        ...state,
        [action.func]: !state[action.func]
      }
    case types.RESET_MODAL:
      return initialState
    default:
      return state
  }
}
