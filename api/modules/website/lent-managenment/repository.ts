import LentModel from "./mongoose";
import logger from "../../../../api/core/logger/log4js";
import { ObjectID } from "mongodb";
import { IFindLentDetail, IFindLentQuery, IFindLentResult, ICreateLentInput, IUpdateLentDetail, IFindLentByUserIdQuery } from "./interface";
import BooksModel from "../book-managenment/mongoose";

const findLentByUserId = async (query: IFindLentByUserIdQuery): Promise<IFindLentResult> => {
  try {
    const totalPromise = await LentModel
    .find(
        query.userId ? { userId: { $regex: `${query.userId}`, $options: 'i' } } : {}
    )
    .countDocuments()
    .exec();

    const data = await LentModel
      .find({
        $or: [
          query.userId ? { userId: { $regex: `${query.userId}`, $options: 'i' } } : {},
        ]
      })
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageNumber - 1) * query.pageSize)
      .limit(Number(query.pageSize))
      .populate('userId')
      .populate('bookId')
      .exec();
    return {
      data,
      total: totalPromise
    };
  } catch (error) {
    throw new Error(error.message || 'Internal server error.');
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
      .find({})
      .sort((query.asc as any) === 'true' ? query.sortBy : `-${query.sortBy}`)
      .skip((query.pageNumber - 1) * query.pageSize)
      .limit(Number(query.pageSize))
      .populate('userId')
      .populate('bookId')
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
    const bookData = await BooksModel.findOne({ _id: body.bookId});
    if (bookData.quantity <= 0) {
      throw new Error ('Out of stock');
    } else {
      const newLent = new LentModel(body);
      await BooksModel.findOneAndUpdate({ _id: body.bookId }, { $inc: {quantity: -1} }, {new: true})
      if (bookData.quantity - 1 <= 0) {
        await BooksModel.findByIdAndUpdate({ _id: body.bookId}, { $set: {status: 'outstock'}})
        return await newLent.save() as any;
      } else {
        return await newLent.save() as any;        
      }
    }
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const editLent = async (body: IUpdateLentDetail): Promise<IFindLentDetail> => {
  try {
    return await LentModel
      .findOneAndUpdate({ _id: body._id }, { $set: body }, {new: true})
      .populate('userId')
      .populate('bookId')
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
  findLentByUserId,
  deleteLent,
  createLent,
  editLent,
  // findExistedLent
}