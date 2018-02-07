import { firebaseAuth, refRoot, table } from '../constants/firebase';
import moment from 'moment';

function generateListeners(weddingId, dispatch) {
  return [
    {
      ref: refRoot(table.USERS.BASE),
      callback: snapshot => dispatch( receiveUsers( snapshot.val() || {} ) )
    },
    {
      ref: refRoot(table.ALLOWED_USERNAMES),
      callback: snapshot => dispatch( receiveUsernames( snapshot.val() || {} ) )
    },
    {
      ref: refRoot(table.EVENTS).orderByChild('startTime').endAt( moment().endOf('day').valueOf() ),
      callback: snapshot => dispatch( receiveEvents( snapshot.val() || {} ) )
    },
    {
      ref: refRoot(table.REGIONS),
      callback: snapshot => dispatch( receiveRegions( snapshot.val() || {} ) )
    },
  ];
}

function receiveEvents(events) {
  return {
    type: types.RECEIVE_EVENTS,
    events
  };
}

function receiveRegions(regions) {
  return {
    type: types.RECEIVE_REGIONS,
    regions
  };
}

function receiveUsers(users) {
  return {
    type: types.RECEIVE_USERS,
    users
  };
}

function receiveUsernames(usernames) {
  return {
    type: types.RECEIVE_USERNAMES,
    usernames
  };
}

export default () => (dispatch, getState) => {
  const on_listeners = generateListeners(weddingId, dispatch);

  on_listeners.forEach(item => item.ref.on(item.eventType || 'value', item.callback) );
};
