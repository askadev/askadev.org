import React from 'react'
import { Link } from 'react-router-dom'

import { logout } from '../../utils/auth'

const Avatar = ({ src }) => (
  <div className="avatar" style={{ backgroundImage: `url(${src})` }} />
)

const adminLinks = [
  {
    path: '/addEvent',
    text: 'Add Event'
  },
  {
    path: '/editProfile',
    text: 'Edit Profile'
  },
  {
    path: '/editEvents',
    text: 'Edit My Events'
  }
]

const superAdminLinks = [
  {
    path: '/addRegion',
    text: 'Add Region'
  },
  {
    path: '/addUsername',
    text: 'Add Username'
  }
]

export default ({ isLoggedIn, photoURL, displayName, isSuperAdmin }) => {
  if (!isLoggedIn) return null

  return (
    <div className="avatar-menu">
      <div className="inner">
        <small>{displayName}</small>
        <Avatar src={photoURL} />
      </div>
      <ul>
        {adminLinks.map((link, i) => (
          <li key={i}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
        {isSuperAdmin &&
          superAdminLinks.map((link, i) => (
            <li key={i}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          ))}
        <li>
          <button className="button" onClick={logout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}
