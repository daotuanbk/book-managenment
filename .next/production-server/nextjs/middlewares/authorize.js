"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwtDecode = require("jwt-decode");
const log4js_1 = require("../../api/core/logger/log4js");
const Authorize = (requiredPermission) => (req, res, next) => {
    const loginUrl = `${req.protocol}://${req.get('host')}/login?callbackUrl=${req.url}`;
    let token = req.cookies.token;
    if (!token) {
        res.redirect(loginUrl);
    }
    else if (token) {
        let tokenData;
        try {
            tokenData = jwtDecode(token);
        }
        catch (error) {
            res.redirect(loginUrl);
        }
        if (tokenData && tokenData.exp && tokenData.exp < Math.round(new Date().getTime() / 1000)) {
            log4js_1.default.error(`Token Expired`);
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
exports.default = Authorize;
//# sourceMappingURL=authorize.js.map