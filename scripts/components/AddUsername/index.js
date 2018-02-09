import { connect } from 'react-redux'

import Presenter from './Presenter'

function mapStateToProps(state) {
  return {
    regions: state.regions.all
  }
}

export default connect(mapStateToProps)(Presenter)
