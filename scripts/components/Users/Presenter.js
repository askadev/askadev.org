import React from "react"

import moment from "moment"

const User = ({
  githubUsername,
  photoURL,
  url,
  displayName,
  tenure,
  skills
}) => (
  <div className="dev-box">
    <header>
      <a href={`https://github.com/${githubUsername}`}>
        <img src={photoURL} alt={name} />
      </a>
      <a href={url}>
        <h4>{displayName}</h4>
        <small>{tenure} years</small>
      </a>
    </header>
    <div className="dev-skills">{skills}</div>
  </div>
);

const Users = ({ users }) => (
  <div className="devs">
    {Object.keys(users || {}).map(key => {
      const user = users[key];
      return (
        <User
          key={key}
          githubUsername={user.githubUsername}
          photoURL={user.photoURL}
          url={user.url}
          name={user.name}
          tenure={user.tenure}
          skills={user.skills} />
      )
    })}
  </div>
);

export default Users;
