import { graphql, compose } from "react-apollo"
import gql from "graphql-tag"
import withData from "../lib/withData"
import { Event } from "./index"

const Events = ({ data: { allTimes, loading, error } }) =>
  loading
    ? "Loading Events"
    : allTimes.map(time =>
        time.events.map(event => (
          <Event
            key={time.id}
            dateTime={time.date}
            directions={event.location.directions}
            name={event.location.name}
          />
        ))
      )

export default compose(
  graphql(
    gql`
      query {
        allTimes(orderBy: date_ASC) {
          id
          date
          events {
            location {
              name
              directions
            }
          }
        }
      }
    `
  )
)(Events)
