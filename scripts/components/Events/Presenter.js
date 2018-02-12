import React from "react"

import moment from "moment"

const maxEvents = 4

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

export default class extends React.Component {
  state = {
    showMore: false
  }

  static defaultProps = {
    events: {}
  }

  componentWillReceiveProps(nextProps) {
    // TODO - this is probably inefficient and doesn't need
    //   to fire when props.regions changes
    this.setState({ showMore: false })
  }

  render() {
    const { events, regions, hasCurrentRegion } = this.props

    const eventKeys = Object.keys(events)
    const sortedEvents = eventKeys.sort((a,b) => events[a].startTime - events[b].startTime)
    const eventCount = eventKeys.length

    if (eventCount === 0) {
      return <p>Stay tuned: we've got local mentors planning for the future.<br /><br /></p>
    }

    return (
      <div className="events">
        {sortedEvents.map((key, i) => {
          const event = events[key];

          // not concerned about i being out of order since we're sorting
          if (i > maxEvents && !this.state.showMore) return;

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
        })}

        {eventCount > maxEvents && !this.state.showMore &&
          <div className="show-more" onClick={() => this.setState({ showMore: true })}>+see more</div>
        }
      </div>
    )
  }
}
