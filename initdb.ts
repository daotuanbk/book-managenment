import * as bcrypt from 'bcryptjs';
import * as mongoose from 'mongoose';
import { UsersSchema } from './api/modules/auth/users/mongoose';
import { RolesSchema } from './api/modules/auth/roles/mongoose';
import { UserPermissions } from './nextjs/constants/user-permissions.constant';
import config from './configs';

mongoose.connect(`${config.database.mongoConnectionString}`, {
  useNewUrlParser: true,
}, async (_err) => {
  const User = mongoose.model('User', UsersSchema);
  const Role = mongoose.model('Role', RolesSchema);

  const existedAdministrator = await Role.findOne({name: 'Administrator'}).exec();
  if (existedAdministrator) {
    await Role.deleteOne({_id: existedAdministrator._id}).exec();
  }
  const administrator = new Role({
    name: 'Administrator',
    normalizedName: 'administrator',
    permissions: Object.keys(UserPermissions).map((key) => UserPermissions[key]),
    isDefault: false,
    isActive: true,
    createdAt: new Date(),
    createdBy: 'Boostrap-Script',
  });
  await administrator.save();

  const existedAdmin = await User.findOne({email: 'admin@email.com'}).exec();
  if (existedAdmin) {
    await User.deleteOne({_id: existedAdmin._id}).exec();
  }
  const admin = new User({
    password: bcrypt.hashSync('admin', 'admin'.length),
    firstName: 'admin',
    middleName: '',
    lastName: 'admin',
    email: 'admin@email.com',
    fullName: 'Admin',
    normalizedFullName: 'admin',
    externalLogin: {
      google: {
        id: '',
        email: '',
      },
      facebook: {
        id: '',
        email: '',
      },
    },
    permissions: Object.keys(UserPermissions).map((key) => UserPermissions[key]),
    roles: ['Administrator'],
    isActive: true,
    isLocked: false,
    failLoginTryCount: 0,
    emailConfirmed: true,
    language: 'en',
    address: 'admin address',
    phoneNumber: '09111111111'
  });
  await admin.save();


  // tslint:disable-next-line:no-console
  console.log(
    `
    FINISH
    You Can Log In As:
      email: admin@email.com
      password: admin
    `
  );
  process.exit();
});