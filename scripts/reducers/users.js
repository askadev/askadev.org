import * as types from '../constants/actionTypes'

const initialState = {
  all: {},
  superAdmins: {},
  currentUser: {
    uid: null,
    firebaseId: null,
    displayName: null,
    photoURL: null,
    url: null,
    region: null,
    skills: null,
    githubUsername: null
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_SUPER_ADMINS:
      return {
        ...state,
        superAdmins: action.users
      }

    case types.TOGGLE_AUTH:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          uid: action.user?.providerData[0].uid,
          firebaseId: action.user?.uid,
          ...state.all[action.user?.providerData[0].uid]
        }
      }

    case types.RECEIVE_USERS:
      return {
        ...state,
        all: action.users,
        currentUser: {
          ...state.currentUser,
          ...action.users[state.currentUser?.uid]
        }
      }

    case types.RESET:
      return initialState

    default:
      return state
  }
}
