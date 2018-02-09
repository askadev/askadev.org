import { connect } from 'react-redux'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    firebaseId: state.users.currentUser.firebaseId,
    displayName: state.users.currentUser.displayName,
    photoURL: state.users.currentUser.photoURL,
    superAdmins: state.users.superAdmins
  }
}

export default connect(mapStateToProps)(Presenter)
