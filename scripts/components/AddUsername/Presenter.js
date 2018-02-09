import React from 'react'

import { addUser } from '../../actions/users'

import FormLayout from '../Layouts/Form'
import { TextInput, TextareaInput, SelectInput } from '../Inputs'

function regionOptions(regions) {
  return Object.keys(regions || {}).map(key => {
    return { value: key, displayName: regions[key].displayName }
  })
}

export default class extends React.Component {

  handleSubmit = e => {
    e.preventDefault()

    fetch(`https://api.github.com/users/${this.username.value}`)
      .then(resp => resp.json().then(data => {
        addUser({
          githubId: data.id,
          githubUsername: this.username.value,
          region: this.region.value,
          developingSince: this.developingSince.value || null,
          skills: this.skills.value || null,
          displayName: data.name
        })
        .then(res => {
          this.username.value = ''
          this.developingSince.value = ''
          this.skills.value = ''
        })
        .catch(res => alert('It failed'))
      }).catch(res => alert('Github query failed'))
    )
  }

  render() {
    return (
      <FormLayout title="Add User">
        <form onSubmit={this.handleSubmit}>
          <TextInput
            label="Github Username"
            inputRef={val => this.username = val} />

          <SelectInput
            label="Region"
            options={regionOptions(this.props.regions)}
            inputRef={val => this.region = val} />

          <TextInput
            label="Tenure"
            maxLength="3"
            inputRef={val => this.tenure = val} />

          <TextareaInput
            label="Skills"
            inputRef={val => this.skills = val} />

          <input type="submit" value="Add" />
        </form>
      </FormLayout>
    )
  }
}
