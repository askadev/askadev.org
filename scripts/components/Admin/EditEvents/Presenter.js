import React from 'react'

import { removeEvent } from 'actions/events'

import moment from 'moment'

import FormLayout from 'components/Admin/Layouts/Form'

function shouldRemoveEvent(uid) {
  if (confirm('Are you sure you want to remove this event?')) {
    removeEvent(uid)
  }
}

const Event = ({ event, uid }) => (
  <div>
    {event.displayName} on {moment(event.startTime).format('MM.DD.YY [at] hh:mm')} <small className="button" onClick={() => shouldRemoveEvent(uid)}>Delete</small>
  </div>
)

const Events = ({ events = {} }) => (
  <FormLayout title="Edit Your Events">
    {Object.keys(events).map(key => <Event event={events[key]} uid={key} key={key} />)}
  </FormLayout>
)

export default Events
