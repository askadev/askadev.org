import { refRoot, table } from '../constants/firebase';

import { created, updated } from './shared';

export function createEvent({ startTime, endTime, region }) {
  return refRoot(table.EVENTS).push({
    startTime,
    endTime,
    region,
    ...created()
  });
}

export function updateEvent({ startTime, endTime, region, uid }) {
  return refRoot(table.EVENTS, uid).push({
    startTime,
    endTime,
    region,
    ...updated()
  });
}
