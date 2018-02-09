import { refRoot, refUsers, table, currentUserUid } from '../constants/firebase'
import * as types from '../constants/actionTypes'

export function addUser({
  githubId,
  skills,
  developingSince,
  displayName,
  githubUsername,
  region
}) {
  return refUsers(githubId).update({
    githubId,
    displayName,
    githubUsername,
    region,
    developingSince,
    skills,
    uid: githubId,
    photoURL: `https://avatars2.githubusercontent.com/u/${githubId}?v=4`
  })
}

export function editProfile({
  developingSince,
  shouldNotDisplay,
  url,
  skills,
  region
}) {
  return refUsers(currentUserUid()).update({
    developingSince,
    shouldNotDisplay,
    url,
    skills
  })
}

export function toggleAuth(user = {}) {
  return {
    type: types.TOGGLE_AUTH,
    user
  }
}
