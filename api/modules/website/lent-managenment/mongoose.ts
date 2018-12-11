import * as mongoose from 'mongoose';
import { addAuditSchema, addActiveSchema } from '../../../core/helpers';
import { ILent } from './interface';

const LentSchema = new mongoose.Schema(addAuditSchema(addActiveSchema({
  bookId: String,
  userId: String,
  dateBorrow: Date,
  dateOfAppointment: Date,
  borrowPrice: Number,
  status: String,
})));

const LentModel = mongoose.model<ILent>('Lent', LentSchema);

export {
  LentSchema
};
export default LentModel;