"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./mongoose");
const log4js_1 = require("../../../core/logger/log4js");
const addQuery = (query) => {
    return mongoose_1.default.find({
        $and: [
            query.search ? { $or: [
                    { email: { $regex: `^${query.search}`, $options: 'i' } },
                    { normalizedFullname: { $regex: `^${query.search}`, $options: 'i' } }
                ]
            } : {},
            query.role ? { roles: query.role } : {},
            query.isActive !== undefined ? { isActive: query.isActive } : {},
            query.emailConfirmed !== undefined ? { emailConfirmed: query.emailConfirmed } : {},
        ]
    });
};
const findUsers = async (query) => {
    try {
        const totalPromise = addQuery(query)
            .countDocuments()
            .exec();
        const dataPromise = addQuery(query)
            .sort(query.asc === 'true' ? query.sortBy : `-${query.sortBy}`)
            .skip((query.pageNumber - 1) * query.pageSize)
            .limit(Number(query.pageSize))
            .select(`_id email profileImgUrl firstName lastName fullName dob phoneNumber i18n permissions roles isActive emailConfirmed address`)
            .exec();
        const [total, data] = await Promise.all([totalPromise, dataPromise]);
        return {
            total,
            data
        };
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const findUserById = async (userId) => {
    try {
        return await mongoose_1.default.findOne({ _id: userId })
            .select(`_id email profileImgUrl firstName lastName fullName dob phoneNumber i18n permissions roles isActive emailConfirmed address`)
            .exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const findUserByEmail = async (email) => {
    try {
        return await mongoose_1.default.findOne({ email: email })
            .select(`_id email profileImgUrl firstName lastName fullName dob phoneNumber i18n permissions roles isActive emailConfirmed address`)
            .exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const createUser = async (body) => {
    try {
        const newUser = new mongoose_1.default(body);
        return await newUser.save();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const verifyEmail = async (params) => {
    try {
        await mongoose_1.default.findOneAndUpdate({ _id: params.userId }, { $set: {
                emailConfirmed: true,
                lastModifiedBy: params.lastModifiedBy,
                lastModifiedAt: params.lastModifiedAt
            } }, { new: true }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const updateUser = async (body) => {
    try {
        await mongoose_1.default.findOneAndUpdate({ _id: body._id }, { $set: body }, { new: true }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const activateUser = async (params) => {
    try {
        await mongoose_1.default.findOneAndUpdate({ _id: params.userId }, { $set: { isActive: true, lastModifiedAt: params.lastModifiedAt, lastModifiedBy: params.lastModifiedBy } }, { new: true }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const deactivateUser = async (params) => {
    try {
        await mongoose_1.default.findOneAndUpdate({ _id: params.userId }, { $set: { isActive: false, lastModifiedAt: params.lastModifiedAt, lastModifiedBy: params.lastModifiedBy } }, { new: true }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const findUserForLogin = async (email) => {
    try {
        return await mongoose_1.default.findOne({ email: email })
            .exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
exports.default = {
    findUsers,
    findUserById,
    findUserByEmail,
    createUser,
    verifyEmail,
    updateUser,
    activateUser,
    deactivateUser,
    findUserForLogin,
};
//# sourceMappingURL=repository.js.map