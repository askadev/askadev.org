import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    auth: state.auth,
    regionName: state.regions.all[ state.auth.region ]?.displayName
  }
}

export default connect(mapStateToProps)(Presenter)
