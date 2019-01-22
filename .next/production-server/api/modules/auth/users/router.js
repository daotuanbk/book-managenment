"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const service_1 = require("./service");
const helpers_1 = require("../../../core/helpers");
const log4js_1 = require("../../../core/logger/log4js");
const usersRouter = express.Router();
usersRouter.get('/findUsers', async (req, res) => {
    try {
        const results = await service_1.default.findUsers(helpers_1.validatePagination(req.query));
        res.status(200).send(results);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
usersRouter.get('/findUserById/:id', async (req, res) => {
    try {
        const result = await service_1.default.findUserById(req.params.id);
        res.status(200).send(result);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
usersRouter.post('/createUser', async (req, res) => {
    try {
        const newUser = await service_1.default.createUser(helpers_1.addCreationAuditInfo(req, req.body));
        res.status(201).send(newUser);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
usersRouter.get('/verifyEmail/:userId', async (req, res) => {
    try {
        await service_1.default.verifyEmail(helpers_1.addModificationAuditInfo(req, req.params));
        res.status(200).redirect('/auth/login');
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
usersRouter.put('/updateUser', async (req, res) => {
    try {
        const newUser = await service_1.default.updateUser(helpers_1.addModificationAuditInfo(req, req.body));
        res.status(201).send(newUser);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
usersRouter.put('/activateUser/:userId', async (req, res) => {
    try {
        await service_1.default.activateUser(helpers_1.addModificationAuditInfo(req, req.params));
        res.status(200).end();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
usersRouter.put('/deactivateUser/:userId', async (req, res) => {
    try {
        await service_1.default.deactivateUser(helpers_1.addModificationAuditInfo(req, req.params));
        res.status(200).end();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
exports.default = usersRouter;
//# sourceMappingURL=router.js.map