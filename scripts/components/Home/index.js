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

function mapStateToProps({ ui }) {
  return {
    modalOpen: Object.keys(ui).filter(key => ui[key] || false).length > 0
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Presenter)
export default Main
