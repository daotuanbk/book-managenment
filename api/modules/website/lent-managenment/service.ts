import LentRepository from './repository';
import * as Joi from 'joi';
import { IFindLentResult, IFindLentQuery, ICreateLentInput, IFindLentDetail, IUpdateLentDetail } from './interface';

const findLentById = async (lentId: string): Promise<IFindLentDetail> => {
  if (!lentId) {
    throw new Error('LentId not found!');
  }
  return await LentRepository.findLentById(lentId);
};

const findLent = async (query: IFindLentQuery): Promise<IFindLentResult> => {
  if (!query) {
    throw new Error('Input not found');
  }
  return await LentRepository.findLent(query);
};

const createLent = async (body: ICreateLentInput): Promise<IFindLentDetail> => {
  const validationRule = Joi.object().keys({
    bookId: Joi.string().required,
    userId: Joi.string().required,
    dateBorrow: Joi.date().required,
    dateOfAppointment: Joi.date().required,
    borrowPrice: Joi.number().required,
    status: Joi.string().required,
  });
  const { error } = Joi.validate(body, validationRule, {
    allowUnknown: true,
  });
  if (error) {
    throw new Error(error.details[0].message);
  }
  return await LentRepository.createLent(body);
};


const editLent = async (body: IUpdateLentDetail): Promise<IFindLentDetail> => {
  const validationRule = Joi.object().keys({
    _id: Joi.string().required(),
    bookId: Joi.string(),
    userId: Joi.string(),
    dateBorrow: Joi.date(),
    dateOfAppointment: Joi.date(),
    borrowPrice: Joi.number(),
    status: Joi.string(),
  });
  const { error } = Joi.validate(body, validationRule, {
    allowUnknown: true,
  });
  if (error) {
    throw new Error(error.details[0].message);
  }
  return await LentRepository.editLent(body);
};

const deleteLent = async (_id: string): Promise<void> => {
  if (!_id) {
    throw new Error('_id is not found');
  }
  return await LentRepository.deleteLent(_id);
};

export default {
  findLent,
  findLentById,
  deleteLent,
  createLent,
  editLent,
}
