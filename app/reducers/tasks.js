import {
  ADD_TASKS_LIST,
} from 'actions/constant';

export default (state = {}, { type, tasks }) => {
  switch (type) {
    case ADD_TASKS_LIST:
      return tasks;
    default:
      return state;
  }
};
