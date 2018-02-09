import React from "react"

import moment from "moment"

const DevelopingYear = ({ developingSince }) => {
  if (!developingSince) return null
  return <small>{moment().diff(moment().year(developingSince), 'years')} years</small>
}

const User = ({
  githubUsername,
  photoURL,
  url,
  displayName,
  developingSince,
  currentRegion,
  regionName,
  skills
}) => (
  <div className="dev-box">
    <header>
      <a href={`https://github.com/${githubUsername}`}>
        <img src={photoURL} alt={name} />
      </a>
      <a href={url}>
        <h4>{displayName}</h4>
        {currentRegion ? (
          <DevelopingYear developingSince={developingSince} />
        ) : (
          <small>{regionName}</small>
        )}
      </a>
    </header>
    { currentRegion &&
      <div className="dev-skills">{skills}</div>
    }
  </div>
);

const Users = ({ users, currentRegion, regions }) => (
  <div className="devs">
    {Object.keys(users || {}).map(key => {
      const user = users[key];
      if (user.shouldNotDisplay) return null;

      return (
        <User
          key={key}
          githubUsername={user.githubUsername}
          photoURL={user.photoURL}
          url={user.url}
          displayName={user.displayName}
          developingSince={user.developingSince}
          regionName={regions[user.region]?.displayName}
          currentRegion={currentRegion}
          skills={user.skills} />
      )
    })}
  </div>
);

export default Users;
