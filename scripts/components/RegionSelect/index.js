import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeCurrentRegion } from '../../actions/regions'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    regions: state.regions.all,
    currentRegion: state.regions.currentRegion
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: bindActionCreators(changeCurrentRegion, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Presenter)
