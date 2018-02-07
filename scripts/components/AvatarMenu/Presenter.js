import React from 'react'

import { firebaseAuth } from '../../constants/firebase'

import Avatar from '../Avatar'

const links = [
  {
    id: 1,
    func: 'addEvent',
    text: 'Create New Event',
    role: ['admin', 'superAdmin']
  },
  {
    id: 2,
    func: 'editProfile',
    text: 'Edit My Profile',
    role: ['admin', 'superAdmin']
  },
  {
    id: 3,
    func: 'editEvents',
    text: 'Edit My Events',
    role: ['admin', 'superAdmin']
  },
  { id: 4, func: 'addUserName', text: 'Add Username', role: ['superAdmin'] }
]

export default ({ uid, photoURL, displayName, toggleUI }) =>
  uid ? (
    <div className="avatar-menu">
      <div className="inner">
        <small>{displayName}</small>
        <Avatar src={photoURL} />
      </div>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <button onClick={() => toggleUI(link.func)}>{link.text}</button>
          </li>
        ))}
        <li>
          <button onClick={() => firebaseAuth().signOut()}>Logout</button>
        </li>
      </ul>
    </div>
  ) : (
    false
  )
