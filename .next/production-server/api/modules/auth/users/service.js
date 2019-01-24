"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const repository_1 = require("./repository");
const configs_1 = require("../../../../configs");
const addFullName = (user) => {
    const normalizedFullName = [user.firstName, user.lastName]
        .join(' ')
        .toLocaleLowerCase();
    const fullName = [user.firstName, user.lastName].join(' ');
    return {
        ...user,
        normalizedFullName,
        fullName,
    };
};
const findUsers = async (query) => {
    return await repository_1.default.findUsers(query);
};
const findUserById = async (userId) => {
    if (!userId) {
        throw new Error('User ID Cant Empty');
    }
    const existedUser = await repository_1.default.findUserById(userId);
    if (!existedUser) {
        throw new Error('User Not Fount');
    }
    else {
        return existedUser;
    }
};
const createUser = async (body) => {
    // Validate Body
    const validationRule = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().regex(configs_1.default.usersModuleConfig.passwordRegex).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().required(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    // Check If Email Exist
    const existedUser = await repository_1.default.findUserByEmail(body.email);
    if (existedUser) {
        throw new Error('Email Has Been Used');
    }
    // Add Fullname, hash Password
    const userWithFullname = addFullName(body);
    const userWithHashPassword = {
        ...userWithFullname,
        password: await bcrypt.hash(userWithFullname.password, userWithFullname.password.length),
    };
    // Save to db
    return await repository_1.default.createUser(userWithHashPassword);
};
const verifyEmail = async (params) => {
    // Check UserId
    if (!params.userId) {
        throw new Error('User ID Is Empty');
    }
    // Check if User exist
    const existedUser = await repository_1.default.findUserById(params.userId);
    if (!existedUser) {
        throw new Error('User Doesnt Exist');
    }
    // Verify Email
    await repository_1.default.verifyEmail(params);
};
const updateUser = async (body) => {
    // Validate body
    const validationRule = Joi.object().keys({
        _id: Joi.string().required(),
        password: Joi.string(),
        profileImgUrl: Joi.string(),
        firstName: Joi.string(),
        lastName: Joi.string(),
        dob: Joi.date(),
        phoneNumber: Joi.string(),
        i18n: Joi.string(),
        permissions: Joi.array(),
        roles: Joi.array(),
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    // Check If UserId Exist
    const existedUser = await repository_1.default.findUserById(body._id);
    if (!existedUser) {
        throw new Error('User Doesnt Exist');
    }
    // Update
    return await repository_1.default.updateUser({
        ...body,
        fullName: [body.firstName ? body.firstName : existedUser.firstName, body.lastName ? body.lastName : existedUser.lastName].join(' '),
        normalizedFullName: [body.firstName ? body.firstName : existedUser.firstName, body.lastName ? body.lastName : existedUser.lastName].join(' ').toLocaleLowerCase(),
    });
};
const activateUser = async (params) => {
    // Check UserId
    if (!params.userId) {
        throw new Error('User ID Is Empty');
    }
    // Check if User exist
    const existedUser = await repository_1.default.findUserById(params.userId);
    if (!existedUser) {
        throw new Error('User Doesnt Exist');
    }
    // Activate
    await repository_1.default.activateUser(params);
};
/** deactive user */
const deactivateUser = async (params) => {
    // Check UserId
    if (!params.userId) {
        throw new Error('User ID Is Empty');
    }
    // Check if User exist
    const existedUser = await repository_1.default.findUserById(params.userId);
    if (!existedUser) {
        throw new Error('User Doesnt Exist');
    }
    await repository_1.default.deactivateUser(params);
};
exports.default = {
    findUsers,
    findUserById,
    createUser,
    verifyEmail,
    updateUser,
    activateUser,
    deactivateUser,
};
//# sourceMappingURL=service.js.map