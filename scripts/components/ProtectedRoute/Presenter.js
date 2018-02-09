import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default ({ component: Component, authed = false, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      authed ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/'
          }}
        />
      )
    }
  />
)
