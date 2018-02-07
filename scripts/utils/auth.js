import { firebaseAuth } from "../constants/firebase"

export function login() {
  const provider = new firebaseAuth.GithubAuthProvider()

  firebaseAuth()
    .signInWithRedirect(provider)
    .then(function(result) {
      const token = result.credential.accessToken
      const user = result.user

      // save username, github id
    })
    .catch(error => console.warn(error))
}

export function logout() {
  return firebaseAuth().signOut()
}
