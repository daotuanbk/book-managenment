import { IFindBookDetail, IFindBookResult } from "../../../../api/modules/website/book-managenment/interface";

export interface IBookPageState {
  data: IFindBookDetail[];
  isBusy: boolean;
  errorMessage: string;
  searchInput: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean;
  total: number;
  fileList: any[];
}

export interface IErrorHappenPayload {
  errorMessage: string;
}

export interface IFetchDataPayload {
  search: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean;
}

export interface IFetchDataSuccessPayload {
  result: IFindBookResult;
}

export interface IOnChangeFileList {
  file: any;
}

export interface IUpdateBookEffect {
  _id: string;
  title?: string,
  description?: string,
  author?: string,
  language?: string,
  categories?: string[],
  coverUrl?: string,
  quantity?: number,
  borrowPrice?: number,
  status?: string,
}

export interface ISearchChangeEffect {
  searchValue: string;
}

export interface ICreateNewBookEffect {
  title: string,
  description: string,
  author: string,
  language: string,
  categories: string[],
  quantity: number,
  borrowPrice: number,
  status: string,
}

export interface IGetBookByIdEffect {
  _id: string;
}

export interface IGetBookByIdSuccess {
  data: IFindBookDetail;
}