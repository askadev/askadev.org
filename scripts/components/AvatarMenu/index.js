import { connect } from 'react-redux'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    firebaseId: state.auth.firebaseId,
    displayName: state.auth.displayName,
    photoURL: state.auth.photoURL,
    superAdmins: state.users.superAdmins
  }
}

export default connect(mapStateToProps)(Presenter)
