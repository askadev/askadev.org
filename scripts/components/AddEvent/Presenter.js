import React from 'react'

import { DateInput, TimeInput, PlacesInput } from '../Inputs'
import RegionSelect from '../RegionSelect'

import FormLayout from '../Layouts/Form'

import { createEvent } from '../../actions/events'

function appendTime(times) {
  return this.date.clone().hours(times[0]).minutes(times[1]).utc().valueOf()
}

export default class extends React.Component {
  handleSubmit = e => {
    e.preventDefault()
    if (!this.date || !this.startTime || !this.endTime || !this.locationData) {
      return alert('All fields are required')
    }

    console.log(this.startTime)

    const startTime = appendTime.call(this, this.startTime)
    const endTime = appendTime.call(this, this.endTime)

    createEvent({
      startTime,
      endTime,
      region: this.props.userCurrentRegion,
      locationData: this.locationData
    })
    .then(res => alert('Event successfully created'))
    .catch(res => alert('Error creating event'))
  }

  render() {
    return (
      <FormLayout title={`Create a new Event in ${this.props.regionDisplayName}`}>
        <form onSubmit={this.handleSubmit}>
          <PlacesInput
            label="Location"
            onSelect={val => this.locationData = val}
          />
          <DateInput
            label="Event Date"
            onChange={val => this.date = val}
          />
          <TimeInput
            label="Start Time"
            onChange={val => this.startTime = val} />
          <TimeInput
            label="End Time"
            onChange={val => this.endTime = val} />
          <input type="submit" value="Add Event" />
        </form>
      </FormLayout>
    )
  }
}
