export default ({
  tenure = 1,
  name = "",
  url = "",
  githubUserId = "",
  github,
  skills = []
}) => (
  <div className="dev-box">
    <header>
      <a href={`https://github.com/${github}`}>
        <img
          alt={name}
          src={`https://avatars0.githubusercontent.com/u/${githubUserId}?s=460&v=4`}
        />
      </a>
      <a href={url} target="_blank">
        <h4>
          {name.split(" ")[0]}
          <br />
          {name.split(" ")[1]}
          <small>{tenure}+ years</small>
        </h4>
      </a>
    </header>
    <ul className="dev-skills">{skills.map(skill => <li>{skill.name}</li>)}</ul>
  </div>
)
