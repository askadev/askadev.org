import { connect } from 'react-redux'

import { toggleAuth } from '../../actions/auth'

import Presenter from './Presenter'

function mapDispatchToProps(dispatch) {
  return {
    toggleAuth: user => dispatch(toggleAuth(user))
  }
}

const Main = connect(null, mapDispatchToProps)(Presenter)
export default Main
