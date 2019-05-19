import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import ProtectedRoute from 'components/ProtectedRoute'
import Home from 'components/Home'
import Guide from 'components/Guide'
import AddEvent from 'components/Admin/AddEvent'
import AddRegion from 'components/Admin/AddRegion'
import AddUsername from 'components/Admin/AddUsername'
import EditEvents from 'components/Admin/EditEvents'
import EditProfile from 'components/Admin/EditProfile'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Austin from 'components/Regions/Austin';
import HackNAppShowdown from 'components/Regions/Austin/HackNAppShowdown';

import { firebaseAuth } from 'constants/firebase'

export default class extends React.Component {
  componentDidMount() {
    const { toggleAuth, loadAll } = this.props
    loadAll()

    this.removeListener = firebaseAuth().onAuthStateChanged(toggleAuth)
  }

  componentWillUnmount() {
    this.removeListener()
  }

  render() {
    const authed = !!this.props.uid

    return (
      <Router>
        <React.Fragment>
          <Header />

          <ProtectedRoute
            authed={authed}
            path="/admin/addEvent"
            component={AddEvent}
          />
          <ProtectedRoute
            authed={authed}
            path="/admin/addRegion"
            component={AddRegion}
          />
          <ProtectedRoute
            authed={authed}
            path="/admin/addUsername"
            component={AddUsername}
          />
          <ProtectedRoute
            authed={authed}
            path="/admin/editEvents"
            component={EditEvents}
          />
          <ProtectedRoute
            authed={authed}
            path="/admin/editProfile"
            component={EditProfile}
          />

          <Route exact path="/austin" component={Austin} />
          <Route exact path="/austin/hacknappshowdown" component={HackNAppShowdown} />
          <Route exact path="/guide" component={Guide} />

          <Route exact path="/" component={Home} />

          <Footer />
        </React.Fragment>
      </Router>
    )
  }
}
