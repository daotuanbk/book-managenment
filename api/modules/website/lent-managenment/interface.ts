import { Document } from 'mongoose';
import { PageableResult } from '../../../../api/core/interfaces';

export interface ILent extends Document {
  bookId: string,
  userId: string,
  dateBorrow: Date,
  dateOfAppointment: Date,
  borrowPrice: number,
  status: string,
}


export interface IFindLentDetail {
  bookId: string,
  userId: string,
  dateBorrow: Date,
  dateOfAppointment: Date,
  borrowPrice: number,
  status: string,
}

export interface ICreateLentInput {
  bookId: string,
  userId: string,
  dateBorrow: Date,
  dateOfAppointment: Date,
  borrowPrice: number,
  status: string,
}

export interface IFindLentResult extends PageableResult<IFindLentDetail> {}

export interface IUpdateLentDetail {
  _id: string;
  bookId?: string,
  userId?: string,
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
