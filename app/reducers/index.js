import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';
import currentUser from './currentUser';

export default combineReducers({
  tasks,
  currentUser,
  form: formReducer,
});
