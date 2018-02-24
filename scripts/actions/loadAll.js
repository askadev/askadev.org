import { firebaseAuth, refRoot, refUsers, table } from '../constants/firebase'
import * as types from '../constants/actionTypes'
import moment from 'moment'

function generateListeners(dispatch) {
  return [
    {
      ref: refUsers(),
      callback: snapshot => dispatch(receiveUsers(snapshot.val() || {}))
    },
    {
      ref: refRoot(table.EVENTS)
        .orderByChild('startTime')
        .startAt(
          moment()
            .startOf('day')
            .utc()
            .valueOf()
        ),
      callback: snapshot => dispatch(receiveEvents(snapshot.val() || {}))
    },
    {
      ref: refRoot(table.REGIONS),
      callback: snapshot => dispatch(receiveRegions(snapshot.val() || {}))
    },
    {
      ref: refRoot(table.SUPER_ADMINS),
      callback: snapshot => dispatch(recieveSuperAdmins(snapshot.val() || {}))
    }
  ]
}

function receiveEvents(events) {
  return {
    type: types.RECEIVE_EVENTS,
    events
  }
}

function receiveRegions(regions) {
  return {
    type: types.RECEIVE_REGIONS,
    regions
  }
}

function receiveUsers(users) {
  return {
    type: types.RECEIVE_USERS,
    users
  }
}

function recieveSuperAdmins(users) {
  return {
    type: types.RECEIVE_SUPER_ADMINS,
    users
  }
}

export default () => (dispatch, getState) => {
  const on_listeners = generateListeners(dispatch)

  on_listeners.forEach(item =>
    item.ref.on(item.eventType || 'value', item.callback)
  )
}
