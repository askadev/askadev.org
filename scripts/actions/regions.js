import { refRoot, firebaseAuth, table } from '../constants/firebase';

export function createRegion(displayName)  {
  return refRoot(table.REGIONS).push({
    displayName
  });
}
