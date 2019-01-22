"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const service_1 = require("./service");
const helpers_1 = require("../../../core/helpers");
const lentManagenmentRouter = express.Router();
lentManagenmentRouter.get('/find-by-user-id/', async (req, res) => {
    try {
        const result = await service_1.default.findLentByUserId(req.query);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
lentManagenmentRouter.get('/find', async (req, res) => {
    try {
        const result = await service_1.default.findLent(helpers_1.validatePagination(req.query));
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
lentManagenmentRouter.post('/create', async (req, res) => {
    try {
        const result = await service_1.default.createLent(req.body);
        res.status(200).send(result);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
});
lentManagenmentRouter.put('/update', async (req, res) => {
    try {
        const result = await service_1.default.editLent(req.body);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
lentManagenmentRouter.delete('/delete', async (req, res) => {
    try {
        await service_1.default.deleteLent(req.body._id);
        res.status(200);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.default = lentManagenmentRouter;
//# sourceMappingURL=router.js.map