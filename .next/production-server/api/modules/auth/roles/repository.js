"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("./mongoose");
const log4js_1 = require("../../../core/logger/log4js");
const addQuery = (query) => {
    return mongoose_1.default.find({
        $and: [
            query.search ? { normalizedName: { $regex: `^${query.search}`, $options: 'i' } } : {},
            query.permissions ? { permissions: { $all: query.permissions } } : {},
            query.isActive !== undefined ? { isActive: query.isActive } : {},
        ]
    });
};
const findRoles = async (query) => {
    try {
        const totalPromise = addQuery(query)
            .countDocuments()
            .exec();
        const dataPromise = addQuery(query)
            .sort(query.asc === 'true' ? query.sortBy : `-${query.sortBy}`)
            .skip((query.pageNumber - 1) * query.pageSize)
            .limit(Number(query.pageSize))
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
const findRoleByName = async (rolename) => {
    try {
        return await mongoose_1.default.findOne({ normalizedName: rolename.toLocaleLowerCase() }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const findRoleById = async (roleId) => {
    try {
        return await mongoose_1.default.findOne({ _id: roleId }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const createNewRole = async (body) => {
    try {
        const newRole = new mongoose_1.default({
            ...body,
            isActive: false,
            isDefault: body.isDefault === undefined ? false : true,
        });
        return await newRole.save();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const updateRole = async (body) => {
    try {
        await mongoose_1.default.updateOne({ _id: body._id }, { $set: body }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const activateRole = async (params) => {
    try {
        await mongoose_1.default.updateOne({ _id: params.roleId }, { $set: { isActive: true, lastModifiedBy: params.lastModifiedBy, lastModifiedAt: params.lastModifiedAt } }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const deactivateRole = async (params) => {
    try {
        await mongoose_1.default.updateOne({ _id: params.roleId }, { $set: { isActive: false, lastModifiedBy: params.lastModifiedBy, lastModifiedAt: params.lastModifiedAt } }).exec();
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
const getAllRoles = async () => {
    try {
        const roles = await mongoose_1.default.find({})
            .select('name')
            .exec();
        return {
            data: roles.map((item) => item.name),
            total: roles.length,
        };
    }
    catch (error) {
        log4js_1.default.error(`${error.message} ${error.stack}`);
        throw new Error('Internal Server Error');
    }
};
exports.default = {
    deactivateRole,
    activateRole,
    updateRole,
    createNewRole,
    findRoleById,
    findRoleByName,
    findRoles,
    getAllRoles,
};
//# sourceMappingURL=repository.js.map