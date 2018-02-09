import React from 'react'
import { Link } from 'react-router-dom'

import { firebaseAuth } from '../../constants/firebase'

import Avatar from '../Avatar'

const links = [
  {
    id: 1,
    path: '/addEvent',
    text: 'Add Event',
    roles: ['admin', 'superAdmin']
  },
  { id: 5, path: '/addRegion', text: 'Add Region', roles: ['superAdmin'] },
  { id: 4, path: '/addUsername', text: 'Add Username', roles: ['superAdmin'] },
  {
    id: 2,
    path: '/editProfile',
    text: 'Edit Profile',
    roles: ['admin', 'superAdmin']
  },
  {
    id: 3,
    path: '/editEvents',
    text: 'Edit My Events',
    roles: ['admin', 'superAdmin']
  }
]

export default ({
  uid,
  photoURL,
  displayName,
  toggleUI,
  superAdmins = {},
  allowedUserNames = {}
}) => {
  if (!uid) return false

  const role = allowedUserNames[uid]
    ? superAdmins[uid] ? 'superAdmin' : 'admin'
    : false

  return (
    <div className="avatar-menu">
      <div className="inner">
        <small>{displayName}</small>
        <Avatar src={photoURL} />
      </div>
      <ul>
        {links.map(link => {
          if (!link.roles.includes(role)) return
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.text}</Link>
            </li>
          )
        })}
        <li>
          <button onClick={() => firebaseAuth().signOut()}>Logout</button>
        </li>
      </ul>
    </div>
  )
}
