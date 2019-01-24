"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const path = require("path");
const defaultFolder = path.join(__dirname, `../../../../../static/images/default`);
const bookFolder = path.join(__dirname, `../../../../../static/images/book`);
const imageFilter = function (_req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
exports.saveFile = () => {
    var storage = multer.diskStorage({
        destination: (req, _file, cb) => {
            switch (req.params.title) {
                case 'book':
                    cb(null, bookFolder);
                    break;
                case 'default':
                    cb(null, defaultFolder);
                    break;
                default:
                    cb(null, defaultFolder);
            }
        },
        filename: (req, file, cb) => {
            if (req.params.id) {
                cb(null, file.fieldname + '-' + req.params.id + '.' + file.mimetype.slice(6, 10));
            }
            else {
                cb(null, file.originalname);
            }
        }
    });
    var upload = multer({ storage: storage, fileFilter: imageFilter });
    return upload;
};
//# sourceMappingURL=upload-image.js.map