import {
  SET_CURRENT_USER,
} from './constant';

export const onSetCurrentUser = (user) => ({ type: SET_CURRENT_USER, user });
