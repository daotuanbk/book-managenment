"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./repository");
const Joi = require("joi");
const findBookById = async (bookId) => {
    if (!bookId) {
        throw new Error('BookId not found!');
    }
    return await repository_1.default.findBookById(bookId);
};
const findBook = async (query) => {
    if (!query) {
        throw new Error('Input not found');
    }
    return await repository_1.default.findBook(query);
};
const findActiveBook = async (query) => {
    if (!query) {
        throw new Error('Input not found');
    }
    return await repository_1.default.findActiveBook(query);
};
const createBook = async (body) => {
    const validationRule = Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        author: Joi.string().required(),
        language: Joi.string().required(),
        categories: Joi.array().required(),
        coverUrl: Joi.string().required(),
        quantity: Joi.number().required(),
        borrowPrice: Joi.number().required(),
        status: Joi.string().required(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    const existedPost = await repository_1.default.findExistedBook(body);
    if (existedPost) {
        if (existedPost.title === body.title) {
            throw new Error('Title has been used!');
        }
    }
    return await repository_1.default.createBook(body);
};
const editBook = async (body) => {
    const validationRule = Joi.object().keys({
        _id: Joi.string().required(),
        title: Joi.string(),
        description: Joi.string(),
        author: Joi.string(),
        language: Joi.string(),
        categories: Joi.array(),
        coverUrl: Joi.string(),
        quantity: Joi.number(),
        borrowPrice: Joi.number(),
        status: Joi.string(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    return await repository_1.default.editBook(body);
};
const deleteBook = async (_id) => {
    if (!_id) {
        throw new Error('_id is not found');
    }
    return await repository_1.default.deleteBook(_id);
};
exports.default = {
    findBook,
    findBookById,
    deleteBook,
    createBook,
    editBook,
    findActiveBook
};
//# sourceMappingURL=service.js.map