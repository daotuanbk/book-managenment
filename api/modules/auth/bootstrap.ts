import { Router } from 'express';
import usersRouter from './users/router';
import authRouter from './auth/router';
import rolesRouter from './roles/router';

const bootstrapAuth = (router: Router) => {
  router.use('/users', usersRouter);
  router.use('/roles', rolesRouter);
  router.use('/auth', authRouter);
};

export default bootstrapAuth;