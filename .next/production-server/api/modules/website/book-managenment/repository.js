"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./mongoose");
const log4js_1 = require("../../../../api/core/logger/log4js");
const mongodb_1 = require("mongodb");
const findBookById = async (bookId) => {
    try {
        return await mongoose_1.default.findOne({ _id: bookId })
            .exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const findBook = async (query) => {
    try {
        const totalPromise = await mongoose_1.default
            .find(query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {})
            .countDocuments()
            .exec();
        const data = await mongoose_1.default
            .find({
            $or: [
                query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
            ]
        })
            .sort(query.asc === 'true' ? query.sortBy : `-${query.sortBy}`)
            .skip((query.pageNumber - 1) * query.pageSize)
            .limit(Number(query.pageSize))
            .exec();
        return {
            data,
            total: totalPromise
        };
    }
    catch (error) {
        throw new Error(error.message || 'Internal server error.');
    }
};
const findActiveBook = async (query) => {
    try {
        const totalPromise = await mongoose_1.default
            .find({
            $and: [
                {
                    $or: [
                        query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
                        query.searchInput ? { description: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
                        query.searchInput ? { author: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
                    ]
                },
                {
                    $or: [
                        { status: 'active' },
                        { status: 'outstock' }
                    ]
                }
            ]
        })
            .countDocuments()
            .exec();
        const data = await mongoose_1.default
            .find({
            $and: [
                {
                    $or: [
                        query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
                        query.searchInput ? { description: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
                        query.searchInput ? { author: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
                    ]
                },
                {
                    $or: [
                        { status: 'active' },
                        { status: 'outstock' }
                    ]
                }
            ]
        })
            .sort(query.asc === 'true' ? query.sortBy : `-${query.sortBy}`)
            .skip((query.pageNumber - 1) * query.pageSize)
            .limit(Number(query.pageSize))
            .exec();
        return {
            data,
            total: totalPromise
        };
    }
    catch (error) {
        throw new Error(error.message || 'Internal server error.');
    }
};
const createBook = async (body) => {
    try {
        const newBook = new mongoose_1.default(body);
        return await newBook.save();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const findExistedBook = async (body) => {
    try {
        const data = await mongoose_1.default
            .findOne({
            $or: [
                { title: body.title },
            ],
        });
        return data;
    }
    catch (error) {
        throw new Error(error.message || 'Internal server error.');
    }
};
const editBook = async (body) => {
    try {
        if (body.status === 'deactive') {
            return await mongoose_1.default
                .findOneAndUpdate({ _id: body._id }, { $set: body }, { new: true })
                .exec();
        }
        else if (body.quantity === 0) {
            return await mongoose_1.default
                .findOneAndUpdate({ _id: body._id }, { $set: { ...body, status: 'outstock' } }, { new: true })
                .exec();
        }
        else if (body.status === 'outstock') {
            return await mongoose_1.default
                .findOneAndUpdate({ _id: body._id }, { $set: { ...body, quantity: 0 } }, { new: true })
                .exec();
        }
        else {
            return await mongoose_1.default
                .findOneAndUpdate({ _id: body._id }, { $set: body }, { new: true })
                .exec();
        }
    }
    catch (error) {
        throw new Error(error.message || 'Internal server error.');
    }
};
const deleteBook = async (_id) => {
    try {
        await mongoose_1.default
            .findByIdAndRemove(new mongodb_1.ObjectID(_id))
            .exec();
    }
    catch (error) {
        throw new Error(error.message || 'Internal server error.');
    }
};
exports.default = {
    findBook,
    findBookById,
    deleteBook,
    createBook,
    editBook,
    findExistedBook,
    findActiveBook
};
//# sourceMappingURL=repository.js.map