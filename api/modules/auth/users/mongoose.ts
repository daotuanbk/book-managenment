import * as mongoose from 'mongoose';
import { addAuditSchema, addActiveSchema } from '../../../core/helpers';
import { IUser } from './interface';

const UsersSchema = new mongoose.Schema(addAuditSchema(addActiveSchema({
  email: String,
  password: String,
  profileImgUrl: String,
  firstName: String,
  lastName: String,
  fullName: String,
  normalizedFullName: String,
  dob: Date,
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
  emailConfirmed: Boolean,
  lastLoginTime: Date,
})));

const UsersModel = mongoose.model<IUser>('User', UsersSchema);

export {
  UsersSchema
};
export default UsersModel;