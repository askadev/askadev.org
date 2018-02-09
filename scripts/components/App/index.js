import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleAuth } from '../../actions/auth'
import loadAll from '../../actions/loadAll'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    uid: state.auth.uid
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleAuth: bindActionCreators(toggleAuth, dispatch),
    loadAll: bindActionCreators(loadAll, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
