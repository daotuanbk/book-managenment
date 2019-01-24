"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const helpers_1 = require("../../../core/helpers");
const BookSchema = new mongoose.Schema(helpers_1.addAuditSchema(helpers_1.addActiveSchema({
    title: String,
    description: String,
    author: String,
    language: String,
    categories: [String],
    coverUrl: String,
    quantity: Number,
    borrowPrice: Number,
    status: String,
})));
exports.BookSchema = BookSchema;
const BooksModel = mongoose.model('Book', BookSchema);
exports.default = BooksModel;
//# sourceMappingURL=mongoose.js.map