import * as express from 'express';
import bootstrapAuth from './modules/auth/bootstrap';
import bootstrapWebsite from './modules/website/bootstrap';
const apiRouter = express.Router();

// Bootstrap API
bootstrapAuth(apiRouter);
bootstrapWebsite(apiRouter);
export default apiRouter;