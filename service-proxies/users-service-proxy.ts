import fetch from 'isomorphic-fetch';
import { IFindUsersResult, IFindUserDetail, ICreateUserInput, IUpdateUserInput } from "../api/modules/auth/users/interface";

class Exception extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isSwaggerException = true;

  static isSwaggerException(obj: any): obj is Exception {
    return obj.isSwaggerException === true;
  }
}

function throwException(
  message: string,
  status: number,
  response: string,
  headers: { [key: string]: any },
  result?: any
): any {
  if (result !== null && result !== undefined) {
    throw result;
  } else {
    throw new Exception(message, status, response, headers, null);
  }
}

async function processResponse<T>(response: Response): Promise<T> {
  const status = response.status;

  let _headers: any = {};
  if (response.headers && response.headers.forEach) {
    response.headers.forEach((v: any, k: any) => (_headers[k] = v));
  }

  if (status === 200 || status === 201) {
    return response.text().then(responseText => {
      let result: any = null;
      let resultData = responseText === '' ? null : JSON.parse(responseText);
      result = resultData;
      return result;
    });
  } else if (status === 400) {
    return response.text().then(responseText => {
      return throwException(
        responseText,
        status,
        responseText,
        _headers
      );
    });
  } else if (status === 404) {
    return response.text().then(responseText => {
      return throwException(
        responseText,
        status,
        responseText,
        _headers
      );
    });
  } else if (status !== 200 && status !== 204) {
    return response.text().then(responseText => {
      return throwException(
        responseText,
        status,
        responseText,
        _headers
      );
    });
  }
  return Promise.resolve<T>(null as any);
}

const UsersServiceProxy = (baseUrl = '', token) => {
  return {
    findUsers: async (
      search: string | null | undefined,
      role: string | null | undefined,
      isActive: boolean | null | undefined,
      emailConfirmed: boolean | null | undefined,
      pageNumber: number | null | undefined,
      pageSize: number | null | undefined,
      sortBy: string,
      asc: boolean,
    ): Promise<IFindUsersResult> => {
      let url = baseUrl + '/users/findUsers?';
      if (search !== undefined) {
        url += 'search=' + encodeURIComponent('' + search) + '&';
      }
      if (role !== undefined) {
        url += 'role=' + encodeURIComponent('' + role) + '&';
      }
      if (isActive !== undefined) {
        url += 'isActive=' + encodeURIComponent('' + isActive) + '&';
      }
      if (emailConfirmed !== undefined) {
        url += 'emailConfirmed=' + encodeURIComponent('' + emailConfirmed) + '&';
      }
      if (pageNumber !== undefined) {
        url += 'pageNumber=' + encodeURIComponent('' + pageNumber) + '&';
      }
      if (pageSize !== undefined) {
        url += 'pageSize=' + encodeURIComponent('' + pageSize) + '&';
      }
      if (sortBy === undefined || sortBy === null) {
        throw new Error(
          'The parameter \'sortBy\' must be defined and cannot be null.'
        );
      } else {
        url += 'sortBy=' + encodeURIComponent('' + sortBy) + '&';
      }
      if (asc === undefined || asc === null) {
        throw new Error(
          'The parameter \'asc\' must be defined and cannot be null.'
        );
      } else {
        url += 'asc=' + encodeURIComponent('' + asc) + '&';
      }
      url = url.replace(/[?&]$/, '');

      let options = {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindUsersResult>(response)
      );
    },
    findUserById: async (userId: string): Promise<IFindUserDetail> => {
      let url = baseUrl + '/users/findUserById/';
      if (userId === undefined || userId === null) {
        throw new Error(
          'The parameter \'userId\' must be defined and cannot be null.'
        );
      } else {
        url += encodeURIComponent('' + userId) + '&';
      }
      url = url.replace(/[?&]$/, '');

      let options = {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindUserDetail>(response)
      );
    },
    createUser: async (createUserInput: ICreateUserInput): Promise<IFindUserDetail> => {
      let url = baseUrl + '/users/createUser';

      let options = {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        },
        body: JSON.stringify(createUserInput),
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindUserDetail>(response)
      );
    },
    verifyEmail: async (userId: string): Promise<void> => {
      let url = baseUrl + '/users/verifyEmail/';
      if (userId === undefined || userId === null) {
        throw new Error(
          'The parameter \'userId\' must be defined and cannot be null.'
        );
      } else {
        url += encodeURIComponent('' + userId) + '&';
      }
      url = url.replace(/[?&]$/, '');

      let options = {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<void>(response)
      );
    },
    updateUser: async (updateUserInput: IUpdateUserInput): Promise<void> => {
      let url = baseUrl + '/users/updateUser';

      let options = {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        },
        body: JSON.stringify(updateUserInput),
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<void>(response)
      );
    },
    activateUser: async (userId: string): Promise<void> => {
      let url = baseUrl + '/users/activateUser/';
      if (userId === undefined || userId === null) {
        throw new Error(
          'The parameter \'userId\' must be defined and cannot be null.'
        );
      } else {
        url += encodeURIComponent('' + userId) + '&';
      }
      url = url.replace(/[?&]$/, '');

      let options = {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<void>(response)
      );
    },
    deactivateUser: async (userId: string): Promise<void> => {
      let url = baseUrl + '/users/deactivateUser/';
      if (userId === undefined || userId === null) {
        throw new Error(
          'The parameter \'userId\' must be defined and cannot be null.'
        );
      } else {
        url += encodeURIComponent('' + userId) + '&';
      }
      url = url.replace(/[?&]$/, '');

      let options = {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<void>(response)
      );
    },
  };
};

export default UsersServiceProxy;