import React from "react"

import moment from "moment"

const DevelopingYear = ({ developingSince }) => {
  if (!developingSince) return null
  return <small>{moment().diff(moment().year(developingSince), 'years')} years</small>
}

const Mentor = ({
  githubUsername,
  photoURL,
  url,
  displayName,
  developingSince,
  shouldShowBio,
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
        {shouldShowBio ? (
          <DevelopingYear developingSince={developingSince} />
        ) : (
          <small>{regionName}</small>
        )}
      </a>
    </header>
    { shouldShowBio &&
      <div className="dev-skills">{skills}</div>
    }
  </div>
);

const Mentors = ({ mentors = {}, shouldShowBio, regions }) => (
  <div className="devs">
    {Object.keys(mentors).map(key => {
      const mentor = mentors[key];
      if (mentor.shouldNotDisplay) return null;

      return (
        <Mentor
          key={key}
          githubUsername={mentor.githubUsername}
          photoURL={mentor.photoURL}
          url={mentor.url}
          displayName={mentor.displayName}
          developingSince={mentor.developingSince}
          regionName={regions[mentor.region]?.displayName}
          shouldShowBio={shouldShowBio}
          skills={mentor.skills} />
      )
    })}
  </div>
);

export default Mentors;
