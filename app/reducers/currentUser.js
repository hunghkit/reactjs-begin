import Cookies from 'universal-cookie';

import {
  SET_CURRENT_USER,
} from 'actions/constant';

export default (state = {}, { type, user = {} }) => {
  switch (type) {
    case SET_CURRENT_USER: {
      const cookies = new Cookies();
      user.token ? cookies.set('token', user.token) : cookies.remove('token');
      return user;
    }
    default:
      return state;
  }
};
