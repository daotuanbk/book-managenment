"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uploadImage = async (req) => {
    if (!req.params.title) {
        throw new Error('Directory is Not Found');
    }
};
const getImages = async (req) => {
    if (!req.params.title) {
        throw new Error('Directory is Not Found');
    }
};
const deleteImage = async (req) => {
    if (!req.params.id) {
        throw new Error('ID is Not Found');
    }
    if (!req.params.title) {
        throw new Error('Directory is Not Found');
    }
};
exports.default = {
    uploadImage,
    getImages,
    deleteImage
};
//# sourceMappingURL=service.js.map