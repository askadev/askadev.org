import * as types from '../constants/actionTypes'
import { refRoot, firebaseAuth, table } from '../constants/firebase';

export function createRegion(displayName)  {
  return refRoot(table.REGIONS).push({
    displayName
  });
}

export function changeCurrentRegion(regionId) {
  return {
    type: types.SET_CURRENT_REGION,
    regionId
  }
}
