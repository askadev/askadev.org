import * as types from '../constants/actionTypes';

import moment from 'moment';

const initialState = {
  all: {},
  currentRegion: null
};

export default function(state = initialState, action) {
  switch(action.type) {
    case types.RECEIVE_REGIONS:
      return {
        ...state,
        all: action.regions
      }

    case types.SET_CURRENT_REGION:
      return {
        ...state,
        currentRegion: action.region
      };

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};
