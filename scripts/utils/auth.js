import { firebaseAuth, refRoot, table } from "../constants/firebase"

export function login() {
  const provider = new firebaseAuth.GithubAuthProvider()

  firebaseAuth()
    .signInWithPopup(provider)
    .then(function(result) {
      const token = result.credential.accessToken
      const { displayName, photoURL, uid = false } = result.user

      // save username, github id
      if (uid) {
        refRoot(table.USERS.BASE)
          .child(uid)
          .set({
            displayName,
            photoURL
          })
      } else {
        // Log failed signup info here
      }
    })
    .catch(error => console.warn(error))
}

export function logout() {
  return firebaseAuth().signOut()
}
