import moment from "moment"

export default ({
  date = "No Date Specified",
  startTime = "",
  endTime = "",
  location = "Unknown Location",
  directions = "",
  name = "Unknown Name"
}) => (
  <div className="event">
    <div className="event-location">
      <a href={directions}>{name}</a>
      <small>&nbsp; {location}</small>
    </div>
    <div className="event-time">{`${date} ${startTime} - ${endTime}`}</div>
  </div>
)
