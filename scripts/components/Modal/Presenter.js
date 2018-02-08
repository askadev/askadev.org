import React from 'react'

export default class extends React.Component {
  closeModal = e => {
    if (e.target && e.target.className === 'modal') {
      this.props.resetModal()
    }
  }
  render() {
    const { ui, children } = this.props
    const open = Object.keys(ui).find(key => ui[key])
    return open ? (
      <div className="modal" onClick={this.closeModal}>
        <div className="inner">{children}</div>
      </div>
    ) : (
      false
    )
  }
}
