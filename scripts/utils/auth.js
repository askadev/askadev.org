import { firebaseAuth, refRoot, table } from '../constants/firebase'

export function login() {
  const provider = new firebaseAuth.GithubAuthProvider()

  firebaseAuth()
    .signInWithPopup(provider)
    .then(function(result) {
      const token = result.credential.accessToken
      const { displayName, photoURL, uid = false, providerData } = result.user

      // grab githubID from providerData
      const githubData = providerData[0] || {}
      const { uid: githubID } = githubData

      // save displayName, photoURL, and github id
      if (uid) {
        refRoot(table.USERS.BASE)
          .child(uid)
          .set({
            displayName,
            photoURL,
            githubID
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
