import * as express from "express";
import authService from './service'
import logger from "../../../core/logger/log4js";
import config from "../../../../configs";
import { addCreationAuditInfo } from "../../../core/helpers";

const authRouter = express.Router();

authRouter.get('/checkEmailExist/:email', async (req: any, res) => {
  try {
    const result = await authService.checkEmailExist(req.params.email);
    res.status(200).send(result);
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || "Internal Server Error");
  }
});

authRouter.post("/login/local", async (req: any, res) => {
  try {
    const token = await authService.loginLocal(req.body);
    res.cookie(`token`, token, {
        domain: config.nextjs.cookieDomain,
        maxAge: config.auth.expiresIn * 1000,
      })
      .status(200)
      .json({token});
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res
      .status(error.status || 500)
      .send(error.message || "Email Or Password Is Not Correct");
  }
});

authRouter.post("/register", async (req: any, res) => {
  try {
    const newUser = await authService.registerUser(addCreationAuditInfo(req, req.body));
    res.status(200).send(newUser);
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    res.status(error.status || 500).send(error.message || "Internal Server Error");
  }
});

export default authRouter;