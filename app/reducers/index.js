import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import tasks from './tasks';

export default combineReducers({
  tasks,
  form: formReducer,
});
