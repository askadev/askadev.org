import { refRoot, table } from '../constants/firebase'

import { created, updated } from './shared'

export function createEvent({ startTime, endTime, region, locationData }) {
  refRoot(table.LOCATIONS, locationData.uid).update(locationData)

  return refRoot(table.EVENTS).push({
    startTime,
    endTime,
    region,
    location: locationData.uid,
    displayName: locationData.displayName,
    mapsUrl: locationData.mapsUrl,
    ...created()
  })
}

export function updateEvent({
  startTime,
  endTime,
  uid,
  locationData
}) {
  refRoot(table.LOCATIONS, locationData.uid).update(locationData)

  return refRoot(table.EVENTS, uid).update({
    startTime,
    endTime,
    location: locationData.uid,
    displayName: locationData.displayName,
    mapsUrl: locationData.mapsUrl,
    ...updated()
  })
}

export function removeEvent(uid) {
  return refRoot(table.EVENTS, uid).remove()
}
