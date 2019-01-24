"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const fs = require("fs");
const service_1 = require("./service");
const upload_image_1 = require("../../../core/helpers/upload-image");
const path = require("path");
const util_1 = require("util");
const imagesRouter = express.Router();
imagesRouter.post('/upload/:title/:id', upload_image_1.saveFile().single('image'), async (req, res) => {
    try {
        await service_1.default.uploadImage(req);
        res.status(200).end();
    }
    catch (err) {
        res.status(500).send({
            errorMessage: err.message
        });
    }
});
imagesRouter.post('/upload/:title', upload_image_1.saveFile().single('image'), async (req, res) => {
    try {
        await service_1.default.uploadImage(req);
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            errorMessage: err.message
        });
    }
});
imagesRouter.get('/get/:title', async (req, res) => {
    try {
        await service_1.default.getImages(req);
        const filePath = path.join(__dirname, `../../../../../../static/images/${req.params.title}`);
        const readdir = util_1.promisify(fs.readdir);
        const data = await readdir(filePath);
        let dataHyperlink = data.map((value) => {
            const directory = `/static/images/${req.params.title}/`;
            return directory + value;
        });
        const dataObject = { data: data, dataHyperLink: dataHyperlink };
        res.status(200).send(dataObject);
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            errorMessage: err.message
        });
    }
});
imagesRouter.delete('/delete/:title/:id', async (req, res) => {
    try {
        await service_1.default.deleteImage(req);
        const filePath = path.join(__dirname, `../../../../../../static/images/${req.params.title}/${req.params.id}`);
        const unlink = util_1.promisify(fs.unlink);
        await unlink(filePath);
        res.status(200).end();
    }
    catch (err) {
        console.log(err);
        res.status(500).send({
            errorMessage: err.message
        });
    }
});
exports.default = imagesRouter;
//# sourceMappingURL=router.js.map