"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const repository_1 = require("./repository");
const addNormalizeName = (role) => {
    const normalizedName = role.name.toLocaleLowerCase();
    return {
        ...role,
        normalizedName,
    };
};
const findRoles = async (query) => {
    return await repository_1.default.findRoles(query);
};
const createRole = async (body) => {
    // Validate Body
    const validationRule = Joi.object().keys({
        name: Joi.string().required(),
        permissions: Joi.array().required(),
        isDefault: Joi.boolean(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    // Check If Name Exist
    const existedRole = await repository_1.default.findRoleByName(body.name);
    if (existedRole) {
        throw new Error('Role Name Has Been Used');
    }
    // Save to db
    return await repository_1.default.createNewRole(addNormalizeName(body));
};
const updateRole = async (body) => {
    // Validate body
    const validationRule = Joi.object().keys({
        _id: Joi.string().required(),
        name: Joi.string(),
        permissions: Joi.array(),
        isDefault: Joi.boolean(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    // Check If Role Exist
    const existedRole = await repository_1.default.findRoleById(body._id);
    if (!existedRole) {
        throw new Error('Role Not Found');
    }
    // Update
    await repository_1.default.updateRole(body);
};
const activateRole = async (params) => {
    // Check RoleId
    if (!params.roleId) {
        throw new Error('Role ID Is Empty');
    }
    // Check If RoleId Exist
    const existedRole = await repository_1.default.findRoleById(params.roleId);
    if (!existedRole) {
        throw new Error('Role Not Found');
    }
    // Activate
    await repository_1.default.activateRole(params);
};
const deactivateRole = async (params) => {
    // Check RoleId
    if (!params.roleId) {
        throw new Error('Role ID Is Empty');
    }
    // Check If RoleId Exist
    const existedRole = await repository_1.default.findRoleById(params.roleId);
    if (!existedRole) {
        throw new Error('Role Not Found');
    }
    // Activate
    await repository_1.default.deactivateRole(params);
};
const getAllRoles = async () => {
    return await repository_1.default.getAllRoles();
};
exports.default = {
    findRoles,
    createRole,
    updateRole,
    activateRole,
    deactivateRole,
    getAllRoles,
};
//# sourceMappingURL=service.js.map