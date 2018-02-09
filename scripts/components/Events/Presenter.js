import React from "react"

import moment from "moment"

const sortByDate = (a, b) =>  new Date(b.startTime) - new Date(a.startTime);


const Event = ({ displayName, mapsUrl, regionName, startTime, endTime, hasCurrentRegion }) => (
  <div className="event">
    <div className="event-location">
      <a href={mapsUrl}>{displayName}</a>&nbsp;
      { !hasCurrentRegion &&
        <small>{regionName}</small>
      }
    </div>
    <div className="event-time">{`${moment(startTime).format('MM.DD.YY')} ${moment(startTime).format('h')}-${moment(endTime).format('ha')}`}</div>
  </div>
);

const Events = ({ events, regions, hasCurrentRegion }) => (
  <div className="events">
    {Object.keys(events || {})
      .sort((a,b) => new Date(events[a].startTime) - new Date(events[b].startTime))
        .map(key => {
          const event = events[key];
          return (
            <Event
              key={key}
              displayName={event.displayName}
              mapsUrl={event.mapsUrl}
              hasCurrentRegion={hasCurrentRegion}
              regionName={regions[event.region]?.displayName}
              startTime={event.startTime}
              endTime={event.endTime} />
          )
        }
    )}
  </div>
);

export default Events;
