"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./mongoose");
const log4js_1 = require("../../../../api/core/logger/log4js");
const mongodb_1 = require("mongodb");
const mongoose_2 = require("../book-managenment/mongoose");
const findLentByUserId = async (query) => {
    try {
        const totalPromise = await mongoose_1.default
            .find(query.userId ? { userId: { $regex: `${query.userId}`, $options: 'i' } } : {})
            .countDocuments()
            .exec();
        const data = await mongoose_1.default
            .find({
            $or: [
                query.userId ? { userId: { $regex: `${query.userId}`, $options: 'i' } } : {},
            ]
        })
            .sort(query.asc === 'true' ? query.sortBy : `-${query.sortBy}`)
            .skip((query.pageNumber - 1) * query.pageSize)
            .limit(Number(query.pageSize))
            .populate('userId')
            .populate('bookId')
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
const findLent = async (query) => {
    try {
        const totalPromise = await mongoose_1.default
            .find(query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {})
            .countDocuments()
            .exec();
        const data = await mongoose_1.default
            .find({})
            .sort(query.asc === 'true' ? query.sortBy : `-${query.sortBy}`)
            .skip((query.pageNumber - 1) * query.pageSize)
            .limit(Number(query.pageSize))
            .populate('userId')
            .populate('bookId')
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
const createLent = async (body) => {
    try {
        const bookData = await mongoose_2.default.findOne({ _id: body.bookId });
        if (bookData.quantity <= 0) {
            throw new Error('Out of stock');
        }
        else {
            const newLent = new mongoose_1.default(body);
            await mongoose_2.default.findOneAndUpdate({ _id: body.bookId }, { $inc: { quantity: -1 } }, { new: true });
            if (bookData.quantity - 1 <= 0) {
                await mongoose_2.default.findByIdAndUpdate({ _id: body.bookId }, { $set: { status: 'outstock' } });
                return await newLent.save();
            }
            else {
                return await newLent.save();
            }
        }
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const editLent = async (body) => {
    try {
        return await mongoose_1.default
            .findOneAndUpdate({ _id: body._id }, { $set: body }, { new: true })
            .populate('userId')
            .populate('bookId')
            .exec();
    }
    catch (error) {
        throw new Error(error.message || 'Internal server error.');
    }
};
const deleteLent = async (_id) => {
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
    findLent,
    findLentByUserId,
    deleteLent,
    createLent,
    editLent,
};
//# sourceMappingURL=repository.js.map