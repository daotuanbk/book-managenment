import * as express from 'express';
import * as fs from 'fs';
import imagesService from './service';
import { saveFile } from '../../../core/helpers/upload-image'
import * as path from 'path';
import { promisify } from 'util';
const imagesRouter = express.Router();

imagesRouter.post('/upload/:title/:id', saveFile().single('image'), async (req, res) => {
    try {
        await imagesService.uploadImage(req);
        res.status(200).end();
    } catch (err) {
        res.status(500).send({
            errorMessage: err.message
        });

    }
});

imagesRouter.post('/upload/:title', saveFile().single('image'), async (req, res) => {
    try {
        await imagesService.uploadImage(req);
        res.status(200).end();
    } catch (err) {
        console.log(err);
        res.status(500).send({
            errorMessage: err.message
        });

    }
});

imagesRouter.get('/get/:title', async (req, res) => {
    try {
        await imagesService.getImages(req);
        const filePath = path.join(
            __dirname,
            `../../../../../../static/images/${req.params.title}`,
          );
        const readdir = promisify(fs.readdir);
        const data = await readdir(filePath);
        let dataHyperlink = data.map((value) => {
            const directory = `/static/images/${req.params.title}/`;
            return directory + value;
        });
        const dataObject = {data: data, dataHyperLink: dataHyperlink};
        res.status(200).send(dataObject);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            errorMessage: err.message
        });

    }
});

imagesRouter.delete('/delete/:title/:id', async (req, res) => {
    try {
        await imagesService.deleteImage(req);
        const filePath = path.join(
            __dirname,
            `../../../../../../static/images/${req.params.title}/${req.params.id}`,
          );
        const unlink = promisify(fs.unlink);
        await unlink(filePath);
        res.status(200).end();
    } catch (err) {
        console.log(err);
        res.status(500).send({
            errorMessage: err.message
        });

    }
});
export default imagesRouter;