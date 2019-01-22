"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const repository_1 = require("../users/repository");
const configs_1 = require("../../../../configs");
const addFullName = (user) => {
    const normalizedFullName = [user.firstName, user.lastName].join(' ').toLocaleLowerCase();
    const fullName = [user.firstName, user.lastName].join(' ');
    return {
        ...user,
        normalizedFullName,
        fullName,
    };
};
const checkEmailExist = async (email) => {
    if (!email) {
        throw new Error('Bad Request');
    }
    // check if email exist
    const existedUser = await repository_1.default.findUserByEmail(email);
    if (existedUser) {
        return true;
    }
    else {
        return false;
    }
};
const createToken = async (user) => {
    const tokenData = {
        _id: user._id,
        email: user.email,
        profileImgUrl: user.profileImgUrl,
        fullName: user.fullName,
        dob: user.dob,
        phoneNumber: user.phoneNumber,
        i18n: user.i18n,
        permissions: user.permissions ? user.permissions : [],
        roles: user.roles ? user.roles : [],
        address: user.address ? user.address : '',
    };
    const expiresIn = configs_1.default.auth.expiresIn;
    return await jwt.sign(tokenData, configs_1.default.auth.secret, { expiresIn });
};
const refreshToken = async (token) => {
    let oldTokenData = {};
    try {
        oldTokenData = jwt.verify(token, configs_1.default.auth.secret);
    }
    catch (error) {
        throw new Error('Invalid token');
    }
    if (oldTokenData && oldTokenData.exp && oldTokenData.exp < Math.round(new Date().getTime() / 1000)) {
        throw new Error('Token expired');
    }
    const user = await repository_1.default.findUserForLogin(oldTokenData.email);
    return await createToken(user);
};
const loginLocal = async (body) => {
    // Validate Body
    const validationRule = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    // Check Email and Password
    const existedUser = await repository_1.default.findUserForLogin(body.email);
    if (!existedUser) {
        throw new Error('Email Doesnt Exist');
    }
    if (!existedUser.emailConfirmed) {
        throw new Error('Email Doesnt Exist');
    }
    if (!existedUser.isActive) {
        throw new Error('This Email Is Currently Deactivate. Please Contact Your Admin');
    }
    if (!bcrypt.compareSync(body.password, existedUser.password)) {
        throw new Error('Password Not Correct');
    }
    return await createToken(existedUser);
};
const registerUser = async (body) => {
    // validate body
    const validationRule = Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().regex(configs_1.default.usersModuleConfig.passwordRegex).required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        roles: Joi.array().required()
    });
    const { error } = Joi.validate(body, validationRule, {
        allowUnknown: true,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }
    // check if email exist
    const existedUser = await repository_1.default.findUserByEmail(body.email);
    if (existedUser) {
        throw new Error('Email has Been Used');
    }
    // create new user
    const userWithFullname = addFullName(body);
    const userWithHashPassword = {
        ...userWithFullname,
        isActive: true,
        emailConfirmed: false,
        password: await bcrypt.hash(userWithFullname.password, userWithFullname.password.length),
    };
    await repository_1.default.createUser(userWithHashPassword);
};
exports.default = {
    checkEmailExist,
    loginLocal,
    registerUser,
    refreshToken,
};
//# sourceMappingURL=service.js.map