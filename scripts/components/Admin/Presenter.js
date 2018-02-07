import React from 'react'

import { firebaseAuth } from '../../constants/firebase'

export default class extends React.Component {
  logout = () =>
    firebaseAuth()
      .signOut()
      .then(() => this.props.toggleAdmin())

  render() {
    const { showAdmin, uid } = this.props

    return showAdmin && uid ? (
      <div className="admin-pannel">
        <button onClick={this.logout}>Logout</button>
      </div>
    ) : (
      false
    )
  }
}
