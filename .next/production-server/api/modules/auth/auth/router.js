"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const service_1 = require("./service");
const log4js_1 = require("../../../core/logger/log4js");
const configs_1 = require("../../../../configs");
const helpers_1 = require("../../../core/helpers");
const authRouter = express.Router();
authRouter.get('/checkEmailExist/:email', async (req, res) => {
    try {
        const result = await service_1.default.checkEmailExist(req.params.email);
        res.status(200).send(result);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || "Internal Server Error");
    }
});
authRouter.post("/login/local", async (req, res) => {
    try {
        const token = await service_1.default.loginLocal(req.body);
        res.cookie(`token`, token, {
            domain: configs_1.default.nextjs.cookieDomain,
            maxAge: configs_1.default.auth.expiresIn * 1000,
        })
            .status(200)
            .json({ token });
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res
            .status(error.status || 500)
            .send(error.message || "Email Or Password Is Not Correct");
    }
});
authRouter.post("/register", async (req, res) => {
    try {
        const newUser = await service_1.default.registerUser(helpers_1.addCreationAuditInfo(req, req.body));
        res.status(200).send(newUser);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || "Internal Server Error");
    }
});
exports.default = authRouter;
//# sourceMappingURL=router.js.map