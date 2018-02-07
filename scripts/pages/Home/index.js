import { connect } from "react-redux"

import Presenter from "./Presenter"

function mapDispatchToProps(dispatch) {
  return {
    login: () => dispatch(loginUser())
  }
}

const Main = connect(null, mapDispatchToProps)(Presenter)
export default Main
