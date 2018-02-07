import { firebaseAuth } from '../constants/firebase';

import moment from 'moment';

export const created = () => ({
  createdAt: moment().valueOf(),
  createdBy: firebaseAuth().currentUser.uid
});

export const updated = () => ({
  updatedAt: moment().valueOf(),
  updatedBy: firebaseAuth().currentUser.uid
});
