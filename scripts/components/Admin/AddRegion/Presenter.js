import React from 'react'

import { createRegion } from 'actions/regions'

import FormLayout from 'components/Admin/Layouts/Form'
import { TextInput } from 'components/Inputs'

export default class extends React.Component {
  submit = e => {
    e.preventDefault()
    if (!this.name || !this.name.value) return

    createRegion(this.name.value)
      .then(res => this.name.value = '')
      .catch(res => alert('It failed'))
  }

  static defaultProps = {
    regions: {}
  }

  render() {
    const allRegions = Object.values(this.props.regions).map(item => item.displayName).join(', ')

    return (
      <FormLayout title="New Region">
        Currently: {allRegions}
        <br />
        <br />
        <form onSubmit={this.submit}>
          <TextInput
            label="New Region"
            inputRef={val => this.name = val} />
          <input type="submit" value="Add" />
        </form>
      </FormLayout>
    )
  }
}
