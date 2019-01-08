import BooksModel from "./mongoose";
import logger from "../../../../api/core/logger/log4js";
import { IFindBookDetail, ICreateBookInput, IUpdateBookDetail, IFindBookResult, IFindBookQuery } from "./interface";
import { ObjectID } from "mongodb";

const findBookById = async (bookId: string): Promise<IFindBookDetail> => {
  try {
    return await BooksModel.findOne({_id: bookId})
    .exec() as any;
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const findBook = async (query: IFindBookQuery): Promise<IFindBookResult> => {
  try {
    const totalPromise = await BooksModel
    .find(
        query.searchInput ? { title: { $regex: `${query.searchInput}`, $options: 'i' } } : {}
    )
    .countDocuments()
    .exec();

    const data = await BooksModel
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

const createBook = async (body: ICreateBookInput): Promise<IFindBookDetail> => {
  try {
    const newBook = new BooksModel(body);
    return await newBook.save() as any;
  } catch (error) {
    logger.error(`${error.message} ${error.stack}`);
    throw new Error('Internal Server Error');
  }
};

const findExistedBook = async (body: ICreateBookInput): Promise<IFindBookDetail> => {
  try {
    const data = await BooksModel
      .findOne({
        $or: [
          { title: body.title },
        ],
      });
    return data as any;
  } catch (error) {
    throw new Error(error.message || 'Internal server error.');
  }
};

const editBook = async (body: IUpdateBookDetail): Promise<IFindBookDetail> => {
  try {
    if (body.quantity === 0) {
      await BooksModel
      .findOneAndUpdate({ _id: body._id }, { $set: body }, {new: true})
      return await BooksModel
      .findByIdAndUpdate({ _id: body._id}, { $set: {status: 'outstock'}})
      .exec() as any
    } else if (body.status === 'outstock') {
      await BooksModel
      .findOneAndUpdate({ _id: body._id }, { $set: body }, {new: true})
      return await BooksModel
      .findByIdAndUpdate({ _id: body._id}, { $set: {quantity: 0}})
      .exec() as any
    } else {
    return await BooksModel
      .findOneAndUpdate({ _id: body._id }, { $set: body }, {new: true})
      .exec() as any;
    }
  } catch (error) {
    throw new Error(error.message || 'Internal server error.');
  }
};

const deleteBook = async (_id: string): Promise<void> => {
  try {
    await BooksModel
      .findByIdAndRemove(new ObjectID(_id))
      .exec();
  } catch (error) {
    throw new Error(error.message || 'Internal server error.');
  }
};

export default {
  findBook,
  findBookById,
  deleteBook,
  createBook,
  editBook,
  findExistedBook
}