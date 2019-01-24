"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("./repository");
const Joi = require("joi");
const findLentByUserId = async (query) => {
    if (!query) {
        throw new Error('Query not found!');
    }
    return await repository_1.default.findLentByUserId(query);
};
const findLent = async (query) => {
    if (!query) {
        throw new Error('Input not found');
    }
    return await repository_1.default.findLent(query);
};
const createLent = async (body) => {
    const validationRule = Joi.object().keys({
        bookId: Joi.string().required(),
        userId: Joi.string().required(),
        dateBorrow: Joi.date().required(),
        dateOfAppointment: Joi.date().required(),
        borrowPrice: Joi.number().required(),
        status: Joi.string().required(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    return await repository_1.default.createLent(body);
};
const editLent = async (body) => {
    const validationRule = Joi.object().keys({
        _id: Joi.string().required(),
        bookId: Joi.string(),
        userId: Joi.string(),
        dateBorrow: Joi.date(),
        dateOfAppointment: Joi.date(),
        borrowPrice: Joi.number(),
        status: Joi.string(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    return await repository_1.default.editLent(body);
};
const deleteLent = async (_id) => {
    if (!_id) {
        throw new Error('_id is not found');
    }
    return await repository_1.default.deleteLent(_id);
};
exports.default = {
    findLent,
    findLentByUserId,
    deleteLent,
    createLent,
    editLent,
};
//# sourceMappingURL=service.js.map