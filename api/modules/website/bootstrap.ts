import { Router } from 'express';
import bookRouter from './book-managenment/router';
import lentRouter from './lent-managenment/router';
import imagesRouter from './upload-image/router';

const bootstrapWebsite = (router: Router) => {
  router.use('/book', bookRouter);
  router.use('/lent', lentRouter);
  router.use('/images', imagesRouter);
};

export default bootstrapWebsite;