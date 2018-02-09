import React from 'react'

import moment from 'moment'

import { editProfile } from '../../actions/auth'

import FormLayout from '../Layouts/Form'
import { SelectInput, TextInput, TextareaInput, CheckboxInput } from '../Inputs'

function yearOptions() {
  const maxYears = 30
  const baseYear = moment().year() - maxYears

  return [...Array(30)].map((i, increment) => {
    const nextYear = `${increment + baseYear}`
    return { value: nextYear, displayName: nextYear }
  })
}

export default class extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    editProfile({
      skills: this.skills.value || null,
      developingSince: this.developingSince.value || null,
      url: this.url.value || null,
      shouldNotDisplay: this.shouldNotDisplay.checked || null
    })
    .then(noop => alert('Profile updated'))
    .catch(noop => alert('There was an error saving'))
  }

  render() {
    const { auth } = this.props;

    return (
      <FormLayout title="Edit Yo'self">
        @{auth.githubUsername} is currently in {this.props.regionName}
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <TextareaInput
            label="Skills"
            defaultValue={auth.skills}
            inputRef={val => this.skills = val}
            />

          <SelectInput
            label="Tenure (years developing)"
            key={auth.developingSince}
            defaultValue={auth.developingSince}
            options={yearOptions()}
            inputRef={val => this.developingSince = val} />

          <TextInput
            label="URL"
            placeholder="https://"
            defaultValue={auth.url}
            inputRef={val => this.url = val}
            />
          <CheckboxInput
            label="Hide Profile"
            defaultChecked={auth.shouldNotDisplay}
            inputRef={val => this.shouldNotDisplay = val} />
          <input type="submit" className="button" value="Update" />
        </form>
      </FormLayout>
    )
  }
}
