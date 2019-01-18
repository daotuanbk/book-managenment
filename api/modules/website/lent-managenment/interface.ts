import { Document } from 'mongoose';
import { PageableResult } from '../../../../api/core/interfaces';

export interface ILent extends Document {
  bookId: any,
  userId: any,
  dateBorrow: Date,
  dateOfAppointment: Date,
  borrowPrice: number,
  status: string,
}


export interface IFindLentDetail {
  bookId: any,
  userId: any,
  dateBorrow: Date,
  dateOfAppointment: Date,
  borrowPrice: number,
  status: string,
}

export interface ICreateLentInput {
  bookId: any,
  userId: any,
  dateBorrow: Date,
  dateOfAppointment: Date,
  borrowPrice: number,
  status: string,
}

export interface IFindLentResult extends PageableResult<IFindLentDetail> {}

export interface IUpdateLentDetail {
  _id: string;
  bookId?: any,
  userId?: any,
  dateBorrow?: Date,
  dateOfAppointment?: Date,
  borrowPrice?: number,
  status?: string,
}

export interface IFindLentQuery {
  searchInput: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean;
}

export interface IFindLentByUserIdQuery {
  userId: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean;
}

