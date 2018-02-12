import { firebaseAuth, refRoot, refUsers, table } from '../constants/firebase'

export function login() {
  const provider = new firebaseAuth.GithubAuthProvider()

  // firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(noop => {
    firebaseAuth()
      .signInWithPopup(provider)
      .then(function(result) {
        const token = result.credential.accessToken
        const { displayName, photoURL, uid = false, providerData } = result.user

        // grab githubID from providerData
        const githubData = providerData[0] || {}
        const { uid: githubId } = githubData

        // save displayName, photoURL, and github id
        if (githubId && uid) {
          refUsers(githubId).once('value', snap => {
            if (snap.exists()) {
              refUsers(githubId)
                .update({
                  uid: githubId,
                  firebaseId: uid,
                  displayName,
                  photoURL,
                  githubId
                })

              refRoot(table.USERS.PLAIN, uid)
                .update({
                  uid,
                  githubId,
                  displayName,
                  photoURL
                })
            } else {
              alert('Thank you for your interest; please send us an email if you want to become a mentor.')
              logout();
            }
          })
        } else {
          // Log failed signup info here
        }
      })
      .catch(error => console.warn(error))
  // })
}

export function logout() {
  return firebaseAuth().signOut()
}
