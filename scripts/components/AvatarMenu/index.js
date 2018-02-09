import { connect } from 'react-redux'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    isLoggedIn: !!state.users.currentUser.firebaseId,
    displayName: state.users.currentUser.displayName,
    photoURL: state.users.currentUser.photoURL,
    isSuperAdmin: state.users.isSuperAdmin
  }
}

export default connect(mapStateToProps)(Presenter)
