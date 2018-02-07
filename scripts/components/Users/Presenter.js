import React from "react"

import moment from "moment"

const User = ({
  githubUsername,
  githubUserId,
  url,
  name,
  tenure,
  skills
}) => (
  <div className="dev-box">
    <header>
      <a href={`https://github.com/${github}`}>
        <img src={`https://avatars0.githubusercontent.com/u/${githubUserId}?s=460&v=4`} alt={name} />
      </a>
      <a href={url}>
        <h4>{name}</h4>
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
      return
        <User
          key={key}
          githubUsername={user.githubUsername}
          githubUserId={user.githubUserId}
          url={user.url}
          name={user.name}
          tenure={user.tenure}
          skills={user.skills} />
    })}
  </div>
);

export default Users;
