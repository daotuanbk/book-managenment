import * as express from 'express';
import lentManagenmentService from './service';
import { validatePagination } from '../../../core/helpers';

const lentManagenmentRouter = express.Router();

lentManagenmentRouter.get('/find-by-id/:id', async (req, res) => {
  try {
    const result = await lentManagenmentService.findLentById(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

lentManagenmentRouter.get('/find', async (req, res) => {
  try {
    const result = await lentManagenmentService.findLent(validatePagination(req.query));
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

lentManagenmentRouter.post('/create', async (req, res) => {
  try {
    const result = await lentManagenmentService.createLent(req.body);
    res.status(200).send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
});

lentManagenmentRouter.put('/update', async (req, res) => {
  try {
    const result = await lentManagenmentService.editLent(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

lentManagenmentRouter.delete('/delete', async (req, res) => {
  try {
    await lentManagenmentService.deleteLent(req.body._id);
    res.status(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default lentManagenmentRouter;


