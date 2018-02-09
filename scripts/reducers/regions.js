import * as types from '../constants/actionTypes';

import moment from 'moment';

const initialState = {
  all: {},
  currentRegion: null,
  // currentRegion: '-L4mv91QzX0yfINYSit-'
};

// function getRandomRegion(allRegions) {
//   const regions = Object.keys(allRegions)

//   return regions[ Math.floor(Math.random() * regions.length) ]
// }

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
        currentRegion: action.regionId
      };

    case types.RESET:
      return initialState;

    default:
      return state;
  }
};
