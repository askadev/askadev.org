import { connect } from 'react-redux'

import { toggleUI } from '../../actions/ui'

import Presenter from './Presenter'

function mapStateToProps({ auth: { uid, photoURL, displayName } }) {
  return {
    uid,
    displayName,
    photoURL
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUI: func => dispatch(toggleUI(func))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
