import fetch from 'isomorphic-fetch';
import { IFindBookDetail, IFindBookResult, ICreateBookInput, IUpdateBookDetail } from '../api/modules/website/book-managenment/interface';

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

const BooksServiceProxy = (baseUrl = '', _token = '') => {
  return {
    findBookById: async (
      bookId: string
    ): Promise <IFindBookDetail> => {
      let url = baseUrl + '/book/find-by-id/';
      if (bookId !== undefined) {
        url += encodeURIComponent('' + bookId);
      }
      url = url.replace(/[?&]$/, '');
      let options = {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindBookDetail>(response)
      );
    },
    findBook: async (
      searchInput: string | null | undefined,
      pageNumber: number | null | undefined,
      pageSize: number | null | undefined,
      sortBy: string,
      asc: boolean
    ): Promise<IFindBookResult> => {
      let url = baseUrl + '/book/find?';
      if (searchInput !== undefined) {
        url += 'searchInput=' + encodeURIComponent('' + searchInput) + '&';
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
          'Content-Type': 'application/json'
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindBookResult>(response)
      );
    },
    findActiveBook: async (
      searchInput: string | null | undefined,
      pageNumber: number | null | undefined,
      pageSize: number | null | undefined,
      sortBy: string,
      asc: boolean
    ): Promise<IFindBookResult> => {
      let url = baseUrl + '/book/find-active-book?';
      if (searchInput !== undefined) {
        url += 'searchInput=' + encodeURIComponent('' + searchInput) + '&';
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
          'Content-Type': 'application/json'
        }
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindBookResult>(response)
      );
    },
    create: async (
      createBookInput: ICreateBookInput
    ): Promise <IFindBookDetail> => {
      let url = baseUrl + '/book/create';
      url = url.replace(/[?&]$/, '');

      let options = {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(createBookInput)
      };
      return fetch(url, options as any).then((response: Response) =>
      processResponse<IFindBookDetail>(response)
    );
    },
    update: async (
      updateBlogInput: IUpdateBookDetail
    ): Promise<IFindBookDetail> => {
      let url = baseUrl + '/book/update';
      url = url.replace(/[?&]$/, '');
      let options = {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateBlogInput)
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindBookDetail>(response)
      );
    },
    delete: async (
      _id: string
    ): Promise<void> => {
      let url = baseUrl + '/book/delete';
      url = url.replace(/[?&]$/, '');
      let options = {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<void>(response)
      );
    },
  };
};

export default BooksServiceProxy;