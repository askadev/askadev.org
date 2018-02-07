import { connect } from "react-redux"

import Presenter from "./Presenter"

function mapDispatchToProps(dispatch) {
  return {}
}

const Main = connect(null, mapDispatchToProps)(Presenter)
export default Main
