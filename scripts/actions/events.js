import { refRoot, table } from '../constants/firebase'

import { created, updated } from './shared'

export function createEvent({ startTime, endTime, region, name, location }) {
  return refRoot(table.EVENTS).push({
    startTime,
    endTime,
    region,
    name,
    location,
    ...created()
  })
}

export function updateEvent({
  startTime,
  endTime,
  region,
  uid,
  location,
  name
}) {
  return refRoot(table.EVENTS, uid).push({
    startTime,
    endTime,
    name,
    location,
    region,
    ...updated()
  })
}
