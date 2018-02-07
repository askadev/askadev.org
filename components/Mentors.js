import { Mentor } from "./index"
import { graphql, compose } from "react-apollo"
import gql from "graphql-tag"
import withData from "../lib/withData"

const Mentors = ({ data: { allUsers: allMentors, loading, error } }) => (
  <div className="devs">
    {loading
      ? "Loading Mentors"
      : allMentors.map(mentor => (
          <Mentor
            key={mentor.id}
            name={mentor.name}
            githubUserId={mentor.githubUserId}
            tenure={mentor.tenure}
            url={mentor.url}
          />
        ))}
  </div>
)

export default compose(
  graphql(
    gql`
      query {
        allUsers {
          id
          name
          githubUserId
          github
          tenure
          url
        }
      }
    `
  )
)(Mentors)
