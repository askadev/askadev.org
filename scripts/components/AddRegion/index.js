import { connect } from 'react-redux'

import Presenter from './Presenter'

function mapStateToProps({ regions: { all }, ui: { addRegion } }) {
  return {
    regions: all,
    open: addRegion
  }
}

export default connect(mapStateToProps)(Presenter)
