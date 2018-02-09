import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleAuth } from '../../actions/users'
import loadAll from '../../actions/loadAll'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    uid: state.users.currentUser.uid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAuth: bindActionCreators(toggleAuth, dispatch),
    loadAll: bindActionCreators(loadAll, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
