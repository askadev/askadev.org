import * as types from '../constants/actionTypes'

const initialState = {
  uid: null,
  displayName: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_AUTH:
      return {
        ...state,
        uid: action.user.uid || null,
        displayName: action.user.displayName || null
      }
    default:
      return state
  }
}
