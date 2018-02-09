import { connect } from 'react-redux'

import { toggleAuth } from '../../actions/auth'
import loadAll from '../../actions/loadAll'

import Presenter from './Presenter'

function mapDispatchToProps(dispatch) {
  return {
    toggleAuth: user => dispatch(toggleAuth(user)),
    loadAll: () => dispatch(loadAll())
  }
}

function mapStateToProps({ auth: { uid } }) {
  return {
    uid
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
