import axios from 'services/axios';

import {
  ADD_TASKS_LIST,
} from './constant';

export const onAddTasks = (data) => (dispatch) => {
  if (data) return dispatch({ tasks: data, type: ADD_TASKS_LIST });

  return axios.get('/api/v1.0.0/tasks')
    .then((res) => res.data)
    .then(({ tasks }) => ({ tasks: tasks.reduce((obj, item) => ({ ...obj, [item._id]: item }), {}) })) //eslint-disable-line
    .then(({ tasks }) => dispatch({ tasks, type: ADD_TASKS_LIST }))
    .catch((err) => dispatch({ tasks: {}, err, type: ADD_TASKS_LIST }));
};

export const onRemoveTask = (id) => (dispatch, getState) => {
  const tasks = { ...getState().tasks };
  delete tasks[id];
  return axios.delete(`/api/v1.0.0/tasks/${id}`)
    .then(() => dispatch({ tasks, type: ADD_TASKS_LIST }))
    .catch(() => dispatch({ tasks, type: ADD_TASKS_LIST }));
};
