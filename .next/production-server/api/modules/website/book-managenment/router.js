"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const service_1 = require("./service");
const helpers_1 = require("../../../core/helpers");
const bookManagenmentRouter = express.Router();
bookManagenmentRouter.get('/find-by-id/:id', async (req, res) => {
    try {
        const result = await service_1.default.findBookById(req.params.id);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
bookManagenmentRouter.get('/find', async (req, res) => {
    try {
        const result = await service_1.default.findBook(helpers_1.validatePagination(req.query));
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
bookManagenmentRouter.get('/find-active-book', async (req, res) => {
    try {
        const result = await service_1.default.findActiveBook(helpers_1.validatePagination(req.query));
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
bookManagenmentRouter.post('/create', async (req, res) => {
    try {
        const result = await service_1.default.createBook(req.body);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
bookManagenmentRouter.put('/update', async (req, res) => {
    try {
        const result = await service_1.default.editBook(req.body);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
bookManagenmentRouter.delete('/delete', async (req, res) => {
    try {
        await service_1.default.deleteBook(req.body._id);
        res.status(200);
    }
    catch (err) {
        res.status(500).send(err.message);
    }
});
exports.default = bookManagenmentRouter;
//# sourceMappingURL=router.js.map