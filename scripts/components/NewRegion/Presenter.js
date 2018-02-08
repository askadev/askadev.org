import React from 'react'

import { createRegion } from '../../actions/regions'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: ''
    }
  }

  submit = e => {
    e.preventDefault()
    e.stopPropagation()
    if (this.state.displayName.length > 0)
      return createRegion(this.state.displayName)
  }
  render() {
    const { regions, open } = this.props
    return open ? (
      <div>
        <h3>Current Regions</h3>
        {Object.keys(regions).length > 0 ? (
          <ul>
            {Object.keys(regions).map(r => (
              <li key={r}>{regions[r].displayName}</li>
            ))}
          </ul>
        ) : (
          'No Regions Found'
        )}
        <form onSubmit={this.submit}>
          <fieldset>
            <label>New Region</label>
            <input
              value={this.state.displayName}
              onChange={({ target: { value: displayName } }) =>
                this.setState({ displayName })
              }
            />
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    ) : (
      false
    )
  }
}
