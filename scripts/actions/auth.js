import * as types from '../constants/actionTypes'
import { refRoot, refUsers, table, currentUserUid } from '../constants/firebase'

export function editProfile({ developingSince, url, skills, region })  {
  return refUsers(currentUserUid()).update({
    developingSince,
    url,
    skills
  });
}


export function toggleAuth(user = {}) {
  return {
    type: types.TOGGLE_AUTH,
    user
  }
}
