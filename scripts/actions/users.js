import { refRoot, firebaseAuth, table } from '../constants/firebase';

export function updateProfile({ tenure, url, skills, region })  {
  return refRoot(table.USERS.BASE, firebaseAuth().currentUser.uid).update({
    tenure,
    url,
    skills,
    region
  });
}
