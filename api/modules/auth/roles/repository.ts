import RolesModel from './mongoose';
import { IFindRolesQuery, IFindRolesResult, IFindRoleDetail, ICreateRoleInput, IUpdateRoleInput, IActivateRole, IGetAllRolesResult } from './interface';
import logger from '../../../core/logger/log4js';

const addQuery = (query: IFindRolesQuery): any => {
  return RolesModel.find({
    $and: [
      query.search ? {normalizedName: { $regex: `^${query.search}`, $options: 'i' }} : {},
      query.permissions ? {permissions: {$all: query.permissions}} : {},
      query.isActive !== undefined ? {isActive: query.isActive} : {},
    ]
  });
};

const findRoles = async (query: IFindRolesQuery): Promise<IFindRolesResult> => {
  try {
    const totalPromise = addQuery(query)
      .countDocuments()
      .exec();

    const dataPromise = addQuery(query)
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageNumber - 1) * query.pageSize)
      .limit(Number(query.pageSize))
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

const findRoleByName = async (rolename: string): Promise<IFindRoleDetail> => {
  try {
    return await RolesModel.findOne({normalizedName: rolename.toLocaleLowerCase()}).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const findRoleById = async (roleId: string): Promise<IFindRoleDetail> => {
  try {
    return await RolesModel.findOne({_id: roleId}).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const createNewRole = async (
  body: ICreateRoleInput
): Promise<IFindRoleDetail> => {
  try {
    const newRole = new RolesModel({
      ...body,
      isActive: false,
      isDefault: body.isDefault === undefined ? false : true,
    });
    return await newRole.save();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const updateRole = async (
  body: IUpdateRoleInput
): Promise<void> => {
  try {
    await RolesModel.updateOne(
      {_id: body._id},
      {$set: body}
    ).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const activateRole = async (
  params: IActivateRole
): Promise<void> => {
  try {
    await RolesModel.updateOne(
      { _id: params.roleId},
      { $set: {isActive: true, lastModifiedBy: params.lastModifiedBy, lastModifiedAt: params.lastModifiedAt} }
    ).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const deactivateRole = async (
  params: IActivateRole
): Promise<void> => {
  try {
    await RolesModel.updateOne(
      {_id: params.roleId},
      { $set: {isActive: false, lastModifiedBy: params.lastModifiedBy, lastModifiedAt: params.lastModifiedAt} }
    ).exec();
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const getAllRoles = async (): Promise<IGetAllRolesResult> => {
  try {
    const roles = await RolesModel.find({})
      .select('name')
      .exec();

    return {
      data: roles.map((item) => item.name),
      total: roles.length,
    };
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

export default {
  deactivateRole,
  activateRole,
  updateRole,
  createNewRole,
  findRoleById,
  findRoleByName,
  findRoles,
  getAllRoles,
};
