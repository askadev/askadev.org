import { currentUserUid } from '../constants/firebase';

import moment from 'moment';

export const created = () => ({
  createdAt: moment().valueOf(),
  createdBy: currentUserUid()
});

export const updated = () => ({
  updatedAt: moment().valueOf(),
  updatedBy: currentUserUid()
});
