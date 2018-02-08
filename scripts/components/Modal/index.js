import { connect } from 'react-redux'

import { toggleUI, resetModal } from '../../actions/ui'

import Presenter from './Presenter'

function mapStateToProps({ ui }) {
  return {
    ui
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleUI: func => dispatch(toggleUI(func)),
    resetModal: () => dispatch(resetModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
