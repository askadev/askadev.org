import { refRoot, refUsers, table } from '../constants/firebase';

export function addUser({ githubId, skills, developingSince, displayName, githubUsername, region }) {
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
