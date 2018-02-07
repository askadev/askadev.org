import { connect } from 'react-redux'

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

export default connect(mapStateToProps)(Presenter)
