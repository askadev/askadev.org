import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProtectedRoute from '../../components/ProtectedRoute'
import Home from '../../components/Home'
import AddEvent from '../../components/AddEvent'
import AddRegion from '../../components/AddRegion'
import AddUsername from '../../components/AddUsername'
import EditEvents from '../../components/EditEvents'
import EditProfile from '../../components/EditProfile'

import { firebaseAuth } from '../../constants/firebase'

export default class extends React.Component {
  componentDidMount() {
    const { toggleAuth, loadAll } = this.props
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        toggleAuth(user)
        loadAll()
      } else {
        toggleAuth()
      }
    })
  }
  render() {
    const { uid } = this.props
    const authed = uid ? true : false

    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <ProtectedRoute
            authed={authed}
            path="/addEvent"
            component={AddEvent}
          />
          <ProtectedRoute
            authed={authed}
            path="/addRegion"
            component={AddRegion}
          />
          <ProtectedRoute
            authed={authed}
            path="/addUsername"
            component={AddUsername}
          />
          <ProtectedRoute
            authed={authed}
            path="/editEvents"
            component={EditEvents}
          />
          <ProtectedRoute
            authed={authed}
            path="/editProfile"
            component={EditProfile}
          />
        </div>
      </Router>
    )
  }
}
