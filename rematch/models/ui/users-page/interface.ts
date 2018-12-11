import { IFindUserDetail, IFindUsersResult, ICreateUserInput, IUpdateUserInput } from "../../../../api/modules/auth/users/interface";

export interface IUsersPageState {
  addUserModalVisible: boolean;
  isBusy: boolean;

  data: IFindUserDetail[];
  total: number;

  search: string;
  filter: string;
  pageSize: number;
  pageNumber: number;
  sortBy: string;
  asc: boolean;

  currentUser: IFindUserDetail|{};
  errorMessage: string;

  roleList: string[];
}

export interface IOpenAddUserModalPayload {
  currentUser: IFindUserDetail|{};
}

export interface ISearchChangePayload {
  searchValue: string;
}

export interface IFilterChangePayload {
  filterValue: string;
}

export interface IFetchDataPayload {
  search: string;
  filter: string;
  pageNumber: number;
  pageSize: number;
  sortBy: string;
  asc: boolean;
}

export interface IErrorHappenPayload {
  errorMessage: string;
}

export interface IFetchDataSuccessPayload {
  result: IFindUsersResult;
}

export interface ICreateNewUserSuccessPayload {
  userInfo: IFindUserDetail;
}

export interface IUpdateUserSuccessPayload {
  userInfo: IFindUserDetail;
}

export interface IActivateUserSuccessPayload {
  userId: string;
}

export interface ICreateNewUserPayload {
  userInfo: ICreateUserInput;
}

export interface IUpdateUserPayload {
  userInfo: IUpdateUserInput;
}

export interface IActivateUserPayload {
  userId: string;
}

export interface IFetchRoleListSuccess {
  roleList: string[];
}