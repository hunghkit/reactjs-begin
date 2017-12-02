import express from 'express';
import Task from './task';
import Auth from './auth';
import authenticate, { injectUserToReq } from '../heplers/auth';

export default (app) => {
  const router = express.Router();
  const routerAuth = express.Router();

  router.get('/auth', Auth.index);
  router.post('/auth', Auth.login);
  router.post('/auth/register', Auth.register);

  routerAuth.get('/tasks', Task.index);
  routerAuth.post('/tasks', Task.create);
  routerAuth.put('/tasks/:_id', Task.update);
  routerAuth.delete('/tasks/:_id', Task.destroy);

  app.use('/api/v1.0.0', injectUserToReq, router);
  app.use('/api/v1.0.0', authenticate, routerAuth);
};
