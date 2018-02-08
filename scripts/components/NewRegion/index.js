import { connect } from 'react-redux'

import Presenter from './Presenter'

function mapStateToProps({ regions: { all } }) {
  return {
    regions: all
  }
}

export default connect(mapStateToProps)(Presenter)
