import * as types from '../constants/actionTypes'

const initialState = {
  showAdmin: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_ADMIN:
      return {
        ...state,
        showAdmin: !state.showAdmin
      }
    default:
      return state
  }
}
