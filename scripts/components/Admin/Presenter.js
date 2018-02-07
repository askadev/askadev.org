import React from 'react'

export default class extends React.Component {
  render() {
    const { showAdmin, uid } = this.props

    return showAdmin && uid ? <div className="admin-pannel">Admin</div> : false
  }
}
