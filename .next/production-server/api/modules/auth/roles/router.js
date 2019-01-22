"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const service_1 = require("./service");
const log4js_1 = require("../../../core/logger/log4js");
const helpers_1 = require("../../../core/helpers");
const rolesRouter = express.Router();
rolesRouter.get('/getAllRoles', async (_req, res) => {
    try {
        const result = await service_1.default.getAllRoles();
        res.status(200).send(result);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
rolesRouter.get('/findRoles', async (req, res) => {
    try {
        const result = await service_1.default.findRoles(helpers_1.validatePagination(req.query));
        res.status(200).send(result);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
rolesRouter.post('/createRole', async (req, res) => {
    try {
        const newRole = await service_1.default.createRole(helpers_1.addCreationAuditInfo(req, req.body));
        res.status(201).send(newRole);
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
rolesRouter.put('/updateRole', async (req, res) => {
    try {
        await service_1.default.updateRole(helpers_1.addModificationAuditInfo(req, req.body));
        res.status(200).end();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
rolesRouter.put('/activateRole/:roleId', async (req, res) => {
    try {
        await service_1.default.activateRole(helpers_1.addModificationAuditInfo(req, req.params));
        res.status(200).end();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
rolesRouter.put('/deactivateRole/:roleId', async (req, res) => {
    try {
        await service_1.default.deactivateRole(helpers_1.addModificationAuditInfo(req, req.params));
        res.status(200).end();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        res.status(error.status || 500).send(error.message || 'Internal Server Error');
    }
});
exports.default = rolesRouter;
//# sourceMappingURL=router.js.map