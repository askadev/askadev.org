import { currentUserUid } from '../constants/firebase';

import moment from 'moment';

export const created = () => ({
  createdAt: moment().utc().valueOf(),
  createdBy: currentUserUid()
});

export const updated = () => ({
  updatedAt: moment().utc().valueOf(),
  updatedBy: currentUserUid()
});
