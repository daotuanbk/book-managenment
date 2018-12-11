import bookRepository from './repository';
import * as Joi from 'joi';
import { IFindBookResult, IFindBookQuery, ICreateBookInput, IFindBookDetail, IUpdateBookDetail } from './interface';

const findBookById = async (bookId: string): Promise<IFindBookDetail> => {
  if (!bookId) {
    throw new Error('BookId not found!');
  }
  return await bookRepository.findBookById(bookId);
};

const findBook = async (query: IFindBookQuery): Promise<IFindBookResult> => {
  if (!query) {
    throw new Error('Input not found');
  }
  return await bookRepository.findBook(query);
};

const createBook = async (body: ICreateBookInput): Promise<IFindBookDetail> => {
  const validationRule = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    author: Joi.string().required(),
    language: Joi.string().required(),
    categories: Joi.array().required(),
    coverUrl: Joi.string().required(),
    quantity: Joi.number().required(),
    borrowPrice: Joi.number().required(),
    status: Joi.string().required(),
  });
  const { error } = Joi.validate(body, validationRule, {
    allowUnknown: true,
  });
  if (error) {
    throw new Error(error.details[0].message);
  }
  const existedPost = await bookRepository.findExistedBook(body);
  if (existedPost) {
    if (existedPost.title === body.title) {
      throw new Error('Title has been used!');
    }
  }
  return await bookRepository.createBook(body);
};


const editBook = async (body: IUpdateBookDetail): Promise<IFindBookDetail> => {
  const validationRule = Joi.object().keys({
    _id: Joi.string().required(),
    title: Joi.string(),
    description: Joi.string(),
    author: Joi.string(),
    language: Joi.string(),
    categories: Joi.array(),
    coverUrl: Joi.string(),
    quantity: Joi.number(),
    borrowPrice: Joi.number(),
    status: Joi.string(),
  });
  const { error } = Joi.validate(body, validationRule, {
    allowUnknown: true,
  });
  if (error) {
    throw new Error(error.details[0].message);
  }
  return await bookRepository.editBook(body);
};

const deleteBook = async (_id: string): Promise<void> => {
  if (!_id) {
    throw new Error('_id is not found');
  }
  return await bookRepository.deleteBook(_id);
};

export default {
  findBook,
  findBookById,
  deleteBook,
  createBook,
  editBook,
}
