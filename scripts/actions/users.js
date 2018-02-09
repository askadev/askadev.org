import { refRoot, refUsers, table } from '../constants/firebase';

export function addUser({ githubId, skills, tenure, displayName, githubUsername, region }) {
  return refUsers(githubId).update({
    githubId,
    displayName,
    githubUsername,
    region,
    tenure,
    uid: githubId,
    photoURL: `https://avatars2.githubusercontent.com/u/${githubId}?v=4`
  })
}
