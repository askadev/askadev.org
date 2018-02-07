import React from 'react'

const avatarImage = src =>
  src
    ? {
        backgroundImage: `url(${src})`
      }
    : { background: 'grey' }

export default ({ src }) => <div className="avatar" style={avatarImage(src)} />
