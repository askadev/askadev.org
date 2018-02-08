import * as types from '../constants/actionTypes'

const initialState = {
  all: {},
  superAdmins: {},
  allowedUserNames: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_SUPER_ADMINS:
      return {
        ...state,
        superAdmins: action.users
      }

    case types.RECEIVE_USERNAMES:
      return {
        ...state,
        allowedUserNames: action.usernames
      }

    case types.RECEIVE_USERS:
      return {
        ...state,
        all: action.users
      }

    case types.RESET:
      return initialState

    default:
      return state
  }
}
