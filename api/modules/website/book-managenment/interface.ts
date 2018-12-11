import { Document } from 'mongoose';
import { PageableResult } from '../../../../api/core/interfaces';

export interface IBook extends Document {
  title: string,
  description: string,
  author: string,
  language: string,
  categories: string[],
  coverUrl: string,
  quantity: number,
  borrowPrice: number,
  status: string,
}

export interface IFindBookDetail {
  _id: string;
  title: string,
  description: string,
  author: string,
  language: string,
  categories: string[],
  coverUrl: string,
  quantity: number,
  borrowPrice: number,
  status: string,
}

export interface ICreateBookInput {
  title: string,
  description: string,
  author: string,
  language: string,
  categories: string[],
  coverUrl: string,
  quantity: number,
  borrowPrice: number,
  status: string,
}

export interface IFindBookResult extends PageableResult<IFindBookDetail> {}

export interface IUpdateBookDetail {
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

export interface IFindBookQuery {
  searchInput: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean;
}
