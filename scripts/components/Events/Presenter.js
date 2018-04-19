import React from "react"

import moment from "moment"

import "moment-timezone"

const maxEvents = 4

const uses24hFormat = /^(?!America)/.test(moment.tz.guess())

const time24h = (start, end) => `${start.format('HH')}-${end.format('HH[h]')}`

const time12h = (start, end) => `${start.format('h')}-${end.format('ha')}`.slice(0, -1)

const Event = ({ displayName, mapsUrl, regionName, startTime, endTime, hasCurrentRegion }) => {
  const utcStart = moment.utc(startTime)
  const utcEnd = moment.utc(endTime)
  const startTimeFormatted = uses24hFormat ? utcStart.format('DD.MM.YY') : utcStart.format('MM.DD.YY')
  const endTimeFormatted = uses24hFormat ? time24h(utcStart, utcEnd) : time12h(utcStart, utcEnd)

  return (
    <div className="event">
      <div className="event-location">
        <a href={mapsUrl}>{displayName}</a>&nbsp;
        { !hasCurrentRegion &&
          <small>{regionName}</small>
        }
      </div>
      <time dateTime={moment.utc(startTime).format()} className="event-time">
        {startTimeFormatted}
        <span>{endTimeFormatted}</span>
      </time>
    </div>
  );
}

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
    const { events, regions, currentRegion } = this.props

    const eventKeys = Object.keys(events)
    const sortedEvents = eventKeys.sort((a,b) => events[a].startTime - events[b].startTime)
    const eventCount = eventKeys.length

    if (eventCount === 0) {
      const subjectLine = encodeURIComponent(`What's up in ${regions[currentRegion]?.displayName}?`)
      return <p>We're cold in {regions[currentRegion]?.displayName} right now. <a href={`mailto:request@askadev.org?subject=${subjectLine}`}>Shout us</a> for more information.<br /><br /></p>
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
              hasCurrentRegion={!!currentRegion}
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
