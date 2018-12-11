import UsersModel from './mongoose';
import { IFindUsersQuery, IFindUsersResult, IFindUserDetail, ICreateUserInput, IActivateUser, IUpdateUserInput, IUser } from './interface';
import logger from '../../../core/logger/log4js';

const addQuery = (query: IFindUsersQuery): any => {
  return UsersModel.find({
    $and: [
      query.search ? {$or: [
            {email: { $regex: `^${query.search}`, $options: 'i' }},
            {normalizedFullname: {$regex: `^${query.search}`, $options: 'i'}}
          ]
      } : {},
      query.role ? {roles: query.role} : {},
      query.isActive !== undefined ? {isActive: query.isActive} : {},
      query.emailConfirmed !== undefined ? {emailConfirmed: query.emailConfirmed} : {},
    ]
  });
};

const findUsers = async (query: IFindUsersQuery): Promise<IFindUsersResult> => {
  try {
    const totalPromise = addQuery(query)
      .countDocuments()
      .exec();

    const dataPromise = addQuery(query)
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageNumber - 1) * query.pageSize)
      .limit(Number(query.pageSize))
      .select(`_id email profileImgUrl firstName lastName fullName dob phoneNumber i18n permissions roles isActive emailConfirmed`)
      .exec();

    const [total, data] = await Promise.all([totalPromise, dataPromise]);

    return {
      total,
      data
    };
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const findUserById = async (userId: string): Promise<IFindUserDetail> => {
  try {
    return await UsersModel.findOne({_id: userId})
    .select(`_id email profileImgUrl firstName lastName fullName dob phoneNumber i18n permissions roles isActive emailConfirmed`)
    .exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const findUserByEmail = async (email: string): Promise<IFindUserDetail> => {
  try {
    return await UsersModel.findOne({email: email})
    .select(`_id email profileImgUrl firstName lastName fullName dob phoneNumber i18n permissions roles isActive emailConfirmed`)
    .exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const createUser = async (body: ICreateUserInput): Promise<IFindUserDetail> => {
  try {
    const newUser = new UsersModel(body);
    return await newUser.save();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const verifyEmail = async (params: IActivateUser): Promise<void> => {
  try {
    await UsersModel.findOneAndUpdate(
      {_id: params.userId },
      { $set: {
        emailConfirmed: true,
        lastModifiedBy: params.lastModifiedBy,
        lastModifiedAt: params.lastModifiedAt
      }},
      { new : true }
    ).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const updateUser = async (body: IUpdateUserInput): Promise<void> => {
  try {
    await UsersModel.findOneAndUpdate(
      {_id: body._id},
      {$set: body},
      {new: true}
    ).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const activateUser = async (params: IActivateUser): Promise<void> => {
  try {
    await UsersModel.findOneAndUpdate(
      {_id: params.userId},
      {$set: {isActive: true, lastModifiedAt: params.lastModifiedAt, lastModifiedBy: params.lastModifiedBy}},
      {new: true}
    ).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const deactivateUser = async (params: IActivateUser): Promise<void> => {
  try {
    await UsersModel.findOneAndUpdate(
      {_id: params.userId},
      {$set: {isActive: false, lastModifiedAt: params.lastModifiedAt, lastModifiedBy: params.lastModifiedBy}},
      {new: true}
    ).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const findUserForLogin = async (email: string): Promise<IUser> => {
  try {
    return await UsersModel.findOne({email: email})
    .exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};


export default {
  findUsers,
  findUserById,
  findUserByEmail,
  createUser,
  verifyEmail,
  updateUser,
  activateUser,
  deactivateUser,
  findUserForLogin,
};