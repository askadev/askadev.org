import { connect } from 'react-redux'

import { toggleUI } from '../../actions/ui'

import Presenter from './Presenter'

function mapStateToProps({
  auth: { uid, photoURL, displayName },
  users: { superAdmins, allowedUserNames }
}) {
  return {
    uid,
    displayName,
    photoURL,
    superAdmins,
    allowedUserNames
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUI: func => dispatch(toggleUI(func))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
