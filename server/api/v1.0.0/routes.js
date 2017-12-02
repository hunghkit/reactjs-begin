import express from 'express';
import Task from './task';

export default (app) => {
  const router = express.Router();

  router.get('/tasks', Task.index);
  router.post('/tasks', Task.create);
  router.put('/tasks/:_id', Task.update);
  router.delete('/tasks/:_id', Task.destroy);

  app.use('/api/v1.0.0', router);
};
