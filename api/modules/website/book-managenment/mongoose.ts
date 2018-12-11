import * as mongoose from 'mongoose';
import { addAuditSchema, addActiveSchema } from '../../../core/helpers';
import { IBook } from './interface';

const BookSchema = new mongoose.Schema(addAuditSchema(addActiveSchema({
  title: String,
  description: String,
  author: String,
  language: String,
  cover: String,
  categories: [String],
  chapters: [{
    name: String,
    index: Number,
    price: Number,
    currency: String,
    quantity: Number,
  }],
  status: String,
})));

const BooksModel = mongoose.model<IBook>('Book', BookSchema);

export {
  BookSchema
};
export default BooksModel;