import * as types from '../constants/actionTypes'
import { firebaseAuth, currentUserUid } from '../constants/firebase'

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
  },
  isSuperAdmin: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_SUPER_ADMINS:
      return {
        ...state,
        superAdmins: action.users,
        isSuperAdmin: action.users.hasOwnProperty( firebaseAuth().currentUser.uid )
      }

    case types.TOGGLE_AUTH:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...state.all[action.user?.providerData[0].uid]
        }
      }

    case types.RECEIVE_USERS:
      return {
        ...state,
        all: action.users,
        currentUser: {
          ...state.currentUser,
          ...action.users[ currentUserUid() ]
        }
      }

    case types.RESET:
      return initialState

    default:
      return state
  }
}
