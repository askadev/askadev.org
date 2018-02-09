import React from 'react'

import { DateInput, TextInput, TimeInput, PlacesInput, SelectInput } from '../Inputs'
import RegionSelect from '../RegionSelect'

import FormLayout from '../Layouts/Form'

import { createEvent } from '../../actions/events'

function appendTime(times) {
  return this.date.clone().hours(times[0]).minutes(times[1]).utc().valueOf()
}

function regionOptions(regions) {
  return Object.keys(regions || {}).map(key => {
    return { value: key, displayName: regions[key].displayName }
  })
}

export default class extends React.Component {
  state = {
    displayName: '',
    mapsUrl: ''
  }

  handleLocationChange = data => {
    this.locationData = data

    this.setState({
      displayName: data.displayName,
      mapsUrl: data.mapsUrl
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if (!this.date || !this.startTime || !this.endTime || !this.state.displayName || !this.state.mapsUrl) {
      return alert('All fields are required')
    }
    const startTime = appendTime.call(this, this.startTime)
    const endTime = appendTime.call(this, this.endTime)

    createEvent({
      startTime,
      endTime,
      region: this.region?.value || this.props.userCurrentRegion,
      displayName: this.state.displayName,
      mapsUrl: this.state.mapsUrl,
      locationData: this.locationData
    })
    .then(res => alert('Event successfully created'))
    .catch(res => alert('Error creating event'))
  }

  render() {
    return (
      <FormLayout title={`Create a new Event in ${this.props.regionDisplayName}`}>
        <form onSubmit={this.handleSubmit}>
          {this.props.isSuperAdmin &&
            <SelectInput
              label="Region"
              defaultValue={this.props.userCurrentRegion}
              options={regionOptions(this.props.regions)}
              inputRef={val => this.region = val}
            />
          }

          <PlacesInput
            label="Location"
            description="helps other fields"
            onSelect={this.handleLocationChange}
          />

          <TextInput
            label="Location Name"
            placeholder="Ye Old Coffee"
            onChange={displayName => this.setState({ displayName })}
            value={this.state.displayName}
          />

          <TextInput
            label="Location Directions URL"
            placeholder="https://www.google.com/maps/place/Pizza+Hut/@38.9431426,-95.384067,12z/data=!4m17!1m11!4m10!1m3!2m2!1d-95.2306018!2d38.9415404!1m5!1m1!1s0x87bf68b9e0785d35:0xf4831e59f5d003f!2m2!1d-95.2439892!2d38.9431635!3m4!1s0x87bf68b9e0785d35:0xf4831e59f5d003f!8m2!3d38.9431635!4d-95.2439892"
            onChange={mapsUrl => this.setState({ mapsUrl })}
            value={this.state.mapsUrl}
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
