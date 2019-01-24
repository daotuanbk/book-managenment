"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const helpers_1 = require("../../../core/helpers");
const RolesSchema = new mongoose.Schema(helpers_1.addAuditSchema(helpers_1.addActiveSchema({
    name: String,
    normalizedName: String,
    permissions: Array,
    isDefault: Boolean,
})));
exports.RolesSchema = RolesSchema;
const RolesModel = mongoose.model('Role', RolesSchema);
exports.default = RolesModel;
//# sourceMappingURL=mongoose.js.map