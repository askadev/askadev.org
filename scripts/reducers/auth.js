import * as types from '../constants/actionTypes'

const initialState = {
  uid: null,
  firebaseId: null,
  displayName: null,
  photoURL: null,
  url: null,
  region: null,
  skills: null,
  githubUsername: null
}

function receiveUsers(state, users) {
  if (!state.uid) return state;

  return {
    ...state,
    ...users[state.uid]
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_USERS:
      return receiveUsers(state, action.users)

    case types.TOGGLE_AUTH:
      return {
        ...state,
        uid: action.user?.providerData[0].uid,
        firebaseId: action.user?.uid
      }

    default:
      return state
  }
}
