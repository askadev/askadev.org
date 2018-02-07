import moment from "moment"

const formatTime = time => moment(time).format("MM.DD.YY ha")

export default ({
  dateTime = "No Date Specified",
  location = "Unknown Location",
  directions = "",
  name = "Unknown Name"
}) => (
  <div className="event">
    <div className="event-location">
      <a href={directions}>{name}</a>
      <small>&nbsp; Portland</small>
    </div>
    <div className="event-time">{formatTime(dateTime)}</div>
  </div>
)
