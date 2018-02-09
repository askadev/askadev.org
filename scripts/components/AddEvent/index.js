import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { currentUserUid } from '../../constants/firebase'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    open: state.ui.addEvent,
    userCurrentRegion: state.auth.region,
    regionDisplayName: state.regions.all[ state.auth.region ]?.displayName
  }
}

const Main = connect(mapStateToProps)(Presenter)
export default Main
