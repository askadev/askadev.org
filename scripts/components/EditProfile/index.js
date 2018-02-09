import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser,
    regionName: state.regions.all[state.users.currentUser.region]?.displayName
  }
}

export default connect(mapStateToProps)(Presenter)
