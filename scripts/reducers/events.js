import * as types from '../constants/actionTypes';

import moment from 'moment';

const initialState = {
  all: {}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.RECEIVE_EVENTS:
      return {
        ...state,
        all: action.events
      };

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};
