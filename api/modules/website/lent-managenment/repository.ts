import LentModel from "./mongoose";
import logger from "../../../../api/core/logger/log4js";
import { ObjectID } from "mongodb";
import { IFindLentDetail, IFindLentQuery, IFindLentResult, ICreateLentInput, IUpdateLentDetail } from "./interface";

const findLentById = async (lentId: string): Promise<IFindLentDetail> => {
  try {
    return await LentModel.findOne({_id: lentId})
    .exec() as any;
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const findLent = async (query: IFindLentQuery): Promise<IFindLentResult> => {
  try {
    const totalPromise = await LentModel
    .find(
        query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {}
    )
    .countDocuments()
    .exec();

    const data = await LentModel
      .find({
        $or: [
          query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
          query.searchInput ? { description: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
          query.searchInput ? { author: { $regex: `${query.searchInput}`, $options: 'i' } } : {},
        ]
      })
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageNumber - 1) * query.pageSize)
      .limit(Number(query.pageSize))
      .exec();
    return {
      data,
      total: totalPromise
    };
  } catch (error) {
    throw new Error(error.message || 'Internal server error.');
  }
};

const createLent = async (body: ICreateLentInput): Promise<IFindLentDetail> => {
  try {
    const newLent = new LentModel(body);
    return await newLent.save() as any;
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

// const findExistedLent = async (body: ICreateLentInput): Promise<IFindLentDetail> => {
//   try {
//     const data = await LentModel
//       .findOne({
//         $or: [
//           { title: body.title },
//         ],
//       });
//     return data as any;
//   } catch (error) {
//     throw new Error(error.message || 'Internal server error.');
//   }
// };

const editLent = async (body: IUpdateLentDetail): Promise<IFindLentDetail> => {
  try {
    return await LentModel
      .findOneAndUpdate({ _id: body._id }, { $set: body }, {new: true})
      .exec() as any;
  } catch (error) {
    throw new Error(error.message || 'Internal server error.');
  }
};

const deleteLent = async (_id: string): Promise<void> => {
  try {
    await LentModel
      .findByIdAndRemove(new ObjectID(_id))
      .exec();
  } catch (error) {
    throw new Error(error.message || 'Internal server error.');
  }
};

export default {
  findLent,
  findLentById,
  deleteLent,
  createLent,
  editLent,
  // findExistedLent
}