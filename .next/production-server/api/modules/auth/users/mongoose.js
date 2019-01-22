"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const helpers_1 = require("../../../core/helpers");
const UsersSchema = new mongoose.Schema(helpers_1.addAuditSchema(helpers_1.addActiveSchema({
    email: String,
    password: String,
    profileImgUrl: String,
    firstName: String,
    lastName: String,
    fullName: String,
    normalizedFullName: String,
    dob: Date,
    address: String,
    phoneNumber: String,
    i18n: {
        type: String,
        default: 'en-US',
    },
    permissions: [String],
    roles: [String],
    externalLogin: {
        google: {
            id: String,
            email: String,
        },
        facebook: {
            id: String,
            email: String,
        },
    },
    failLoginTryCount: Number,
    emailConfirmed: { type: String, default: true },
    lastLoginTime: Date,
})));
exports.UsersSchema = UsersSchema;
const UsersModel = mongoose.model('User', UsersSchema);
exports.default = UsersModel;
//# sourceMappingURL=mongoose.js.map