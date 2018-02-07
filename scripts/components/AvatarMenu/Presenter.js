import React from 'react'

import Avatar from '../Avatar'

export default ({ uid, photoURL, displayName, toggleAdmin, showAdmin }) =>
  uid ? (
    <a href="#" onClick={toggleAdmin}>
      <div className="avatar-menu">
        <small style={{ color: showAdmin ? 'white' : 'inherit' }}>
          {displayName}
        </small>
        <Avatar src={photoURL} />
      </div>
    </a>
  ) : (
    false
  )
