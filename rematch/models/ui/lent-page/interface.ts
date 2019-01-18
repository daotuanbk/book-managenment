import { IFindLentResult } from "api/modules/website/lent-managenment/interface";
import { IFindBookDetail } from "api/modules/website/book-managenment/interface";

export interface ILentPageState {
  data: any;
  isBusy: boolean;
  errorMessage: string;
  searchInput: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean;
  total: number;
}

export interface IErrorHappenPayload {
  errorMessage: string;
}

export interface IGetLentByIdEffect {
  _id: string;
}

export interface IUpdateLentEffect {
  _id: string;
  bookId?: any,
  userId?: any,
  dateBorrow?: Date,
  dateOfAppointment?: Date,
  borrowPrice?: number,
  status?: string,
}

export interface IFetchDataSuccessPayload {
  result: IFindLentResult;
}

export interface IGetLentByIdSuccess {
  data: IFindBookDetail;
}

export interface IGetLentByUserId {
  userId: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean
}