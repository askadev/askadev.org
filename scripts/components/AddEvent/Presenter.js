import React from 'react'

import DateInput from '../Inputs/Date'
import Places from '../Inputs/Places'
import RegionSelect from '../RegionSelect'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      location: '',
      startTime: '',
      endTime: '',
      date: '',
      region: ''
    }
  }

  submit = e => {
    e.preventDefault()
    e.stopPropagation()
    console.log('you submitted an event')
  }
  render() {
    return (
      <div className="layout-form">
        <div className="inner">
          <h2>Create a new Event!</h2>
          <form onSubmit={this.submit}>
            <fieldset>
              <label htmlFor="name">Event Name</label>
              <input
                name="name"
                type="text"
                placeholder="Event Name"
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
            </fieldset>
            <DateInput
              label="Event Date"
              onChange={date => this.setState({ date })}
            />
            <fieldset>
              <label htmlFor="startTime">Start Time</label>
              <input
                name="startTime"
                type="time"
                placeholder="Event Start Time"
                value={this.state.startTime}
                onChange={e => this.setState({ startTime: e.target.event })}
              />
            </fieldset>
            <fieldset>
              <label htmlFor="endTime">End Time</label>
              <input
                name="endTime"
                type="time"
                placeholder="Event End Time"
                value={this.state.endTime}
                onChange={e => this.setState({ endTime: e.target.event })}
              />
            </fieldset>
            <fieldset>
              <label>Region</label>
              <RegionSelect onChange={region => this.setState({ region })} />
            </fieldset>
            <Places
              label="Location"
              value={this.state.location}
              onChange={location => this.setState({ location })}
            />
            <fieldset>
              <button type="submit">Add Event</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}
