import * as types from '../constants/actionTypes'
import { refRoot, refUsers, table, currentUserUid } from '../constants/firebase'

export function editProfile({ tenure, url, skills, region })  {
  return refUsers(currentUserUid()).update({
    tenure,
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
