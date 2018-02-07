import React from "react"
import Presenter from "./Presenter"

class NewEvent extends React.Component {
  static defaultProps = {
    authed: true
  }
  constructor(props) {
    super(props)
    this.state = {
      startDate: null,
      endDate: null,
      location: null
    }
  }

  changeDate = (forDate, date) => this.setState({ [forDate]: date })

  render = () => {
    const { authed } = this.props
    return authed ? <Presenter changeDate={this.changeDate} /> : false
  }
}

export default NewEvent
