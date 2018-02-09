import React from 'react'

import { editProfile } from '../../actions/auth'

import FormLayout from '../Layouts/Form'
import { TextInput, TextareaInput } from '../Inputs'

export default class extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    editProfile({
      skills: this.skills.value || null,
      tenure: this.tenure.value || null,
      url: this.url.value || null
    })
    .then(noop => alert('Profile updated'))
    .catch(noop => alert('There was an error saving'))
  }

  render() {
    return (
      <FormLayout title="Edit Yo'self">
        @{this.props.auth.githubUsername} is currently in {this.props.regionName}
        <br />
        <br />
        <form onSubmit={this.handleSubmit}>
          <TextareaInput
            label="Skills"
            defaultValue={this.props.auth.skills}
            inputRef={val => this.skills = val}
            />
          <TextInput
            label="Tenure (years developing)"
            placeholder="3+"
            maxLength="3"
            defaultValue={this.props.auth.tenure}
            inputRef={val => this.tenure = val}
            />
          <TextInput
            label="URL"
            placeholder="https://"
            defaultValue={this.props.auth.url}
            inputRef={val => this.url = val}
            />
          <input type="submit" className="button" value="Update" />
        </form>
      </FormLayout>
    )
  }
}
