import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleUI } from '../../actions/ui'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    firebaseId: state.auth.firebaseId,
    displayName: state.auth.displayName,
    photoURL: state.auth.photoURL,
    superAdmins: state.users.superAdmins,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUI: bindActionCreators(toggleUI, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
