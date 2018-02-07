import { connect } from 'react-redux'

import { toggleAdmin } from '../../actions/ui'

import Presenter from './Presenter'

function mapStateToProps({
  auth: { uid, photoURL, displayName },
  ui: { showAdmin }
}) {
  return {
    uid,
    displayName,
    photoURL,
    showAdmin
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAdmin: () => dispatch(toggleAdmin())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
