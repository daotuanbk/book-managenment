"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const helpers_1 = require("../../../core/helpers");
const LentSchema = new mongoose.Schema(helpers_1.addAuditSchema(helpers_1.addActiveSchema({
    bookId: {
        type: String,
        ref: 'Book'
    },
    userId: {
        type: String,
        ref: 'User'
    },
    dateBorrow: Date,
    dateOfAppointment: Date,
    borrowPrice: Number,
    status: String,
})));
exports.LentSchema = LentSchema;
const LentModel = mongoose.model('Lent', LentSchema);
exports.default = LentModel;
//# sourceMappingURL=mongoose.js.map