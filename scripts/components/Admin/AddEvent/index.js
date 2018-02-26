import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { currentUserUid } from '../../../constants/firebase'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    userCurrentRegion: state.users.currentUser.region,
    regionDisplayName: state.regions.all[state.users.currentUser.region]?.displayName,
    regions: state.regions.all,
    isSuperAdmin: state.users.isSuperAdmin
  }
}

const Main = connect(mapStateToProps)(Presenter)
export default Main
