import * as express from 'express';
import bookManagenmentService from './service';
import { validatePagination } from '../../../core/helpers';

const bookManagenmentRouter = express.Router();

bookManagenmentRouter.get('/find-by-id/:id', async (req, res) => {
  try {
    const result = await bookManagenmentService.findBookById(req.params.id);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

bookManagenmentRouter.get('/find', async (req, res) => {
  try {
    const result = await bookManagenmentService.findBook(validatePagination(req.query));
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

bookManagenmentRouter.post('/create', async (req, res) => {
  try {
    const result = await bookManagenmentService.createBook(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

bookManagenmentRouter.put('/update', async (req, res) => {
  try {
    const result = await bookManagenmentService.editBook(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

bookManagenmentRouter.delete('/delete', async (req, res) => {
  try {
    await bookManagenmentService.deleteBook(req.body._id);
    res.status(200);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default bookManagenmentRouter;


