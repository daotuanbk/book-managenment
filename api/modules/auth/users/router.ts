import * as express from 'express';
import usersService from './service';
import { addCreationAuditInfo, addModificationAuditInfo, validatePagination } from '../../../core/helpers';
import logger from '../../../core/logger/log4js';

const usersRouter = express.Router();

usersRouter.get('/findUsers', async (req: any, res) => {
  try {
    const results = await usersService.findUsers(validatePagination(req.query));
    res.status(200).send(results);
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

usersRouter.get('/findUserById/:id', async (req: any, res) => {
  try {
    const result = await usersService.findUserById(req.params.id);
    res.status(200).send(result);
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

usersRouter.post('/createUser', async (req: any, res) => {
  try {
    const newUser = await usersService.createUser(addCreationAuditInfo(req, req.body));
    res.status(201).send(newUser);
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

usersRouter.get('/verifyEmail/:userId', async (req: any, res) => {
  try {
    await usersService.verifyEmail(addModificationAuditInfo(req, req.params));
    res.status(200).redirect('/auth/login');
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

usersRouter.put('/updateUser', async (req: any, res) => {
  try {
    const newUser = await usersService.updateUser(addModificationAuditInfo(req, req.body));
    res.status(201).send(newUser);
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

usersRouter.put('/activateUser/:userId', async (req: any, res) => {
  try {
    await usersService.activateUser(addModificationAuditInfo(req, req.params));
    res.status(200).end();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

usersRouter.put('/deactivateUser/:userId', async (req: any, res) => {
  try {
    await usersService.deactivateUser(addModificationAuditInfo(req, req.params));
    res.status(200).end();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || 'Internal Server Error');
  }
});

export default usersRouter;
