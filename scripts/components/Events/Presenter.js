import React from "react"

import moment from "moment"

const Event = ({
  startTime,
  endTime,
  directions = "",
  location = "Unknown Name"
}) => (
  <div className="event">
    <div className="event-location">
      <a href={directions}>{location}</a>
    </div>
    <div className="event-time">{`${moment(startTime).format('MM.DD.YY')} ${moment(startTime).format('h')}-${moment(endTime).format('ha')}`}</div>
  </div>
);

const Events = ({ events }) => (
  <div className="events">
    {Object.keys(events || {}).map(key => {
      const event = events[key];
      return
        <Event
          key={key}
          startTime={event.startTime}
          endTime={event.endTime}
          location={event.location}
          directions={event.directions} />
    })}
  </div>
);

export default Events;
