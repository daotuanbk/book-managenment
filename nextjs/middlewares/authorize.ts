import * as jwtDecode from 'jwt-decode';
import { ITokenData } from "../../api/modules/auth/auth/interface";
import logger from '../../api/core/logger/log4js';

const Authorize = (requiredPermission: string) => (req, res, next) => {
  const loginUrl = `${req.protocol}://${req.get('host')}/login?callbackUrl=${req.url}`;
  let token: string = req.cookies.token;
  if (!token) {
    res.redirect(loginUrl);
  }
  else if (token) {
    let tokenData: ITokenData;
    try {
      tokenData = jwtDecode(token);
    }
    catch (error) {
      res.redirect(loginUrl);
    }
    if (tokenData && tokenData.exp && tokenData.exp < Math.round(new Date().getTime() / 1000)) {
      logger.error(`Token Expired`);
      res.redirect(loginUrl);
    }
    // Refresh Token
    req.query.profile = {
      ...tokenData,
      token: token,
    };
    // Verify Permissions
    if (requiredPermission && tokenData.roles.indexOf(requiredPermission) === -1) {
      res.redirect('/error?statusCode=401');
    }
    else if (!requiredPermission) {
      next();
      return;
    }
    next();
    return;
  }
};

export default Authorize;