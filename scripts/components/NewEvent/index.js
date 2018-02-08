import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createEvent } from '../../actions/events'

import Presenter from './Presenter'

function mapDispatchToProps(dispatch) {
  return {
    onCreate: bindActionCreators(createEvent, dispatch)
  }
}

function mapStateToProps({ ui: { addEvent } }) {
  return {
    open: addEvent
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Presenter)
export default Main
