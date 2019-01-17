import fetch from 'isomorphic-fetch';
import { IFindLentDetail, IFindLentResult, ICreateLentInput, IUpdateLentDetail } from 'api/modules/website/lent-managenment/interface';

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

const LentServiceProxy = (baseUrl = '', _token = '') => {
  return {
    findLetById: async (
      lentId: string
    ): Promise <IFindLentDetail> => {
      console.log('id', lentId);
      let url = baseUrl + '/lent/find-by-id/';
      if (lentId !== undefined) {
        url += encodeURIComponent('' + lentId);
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
        processResponse<IFindLentDetail>(response)
      );
    },
    findLent: async (
      searchInput: string | null | undefined,
      pageNumber: number | null | undefined,
      pageSize: number | null | undefined,
      sortBy: string,
      asc: boolean
    ): Promise<IFindLentResult> => {
      let url = baseUrl + '/lent/find?';
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
        processResponse<IFindLentResult>(response)
      );
    },
    create: async (
      createBookInput: ICreateLentInput
    ): Promise <IFindLentDetail> => {
      let url = baseUrl + '/lent/create';
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
      processResponse<IFindLentDetail>(response)
    );
    },
    update: async (
      updateLentInput: IUpdateLentDetail
    ): Promise<IFindLentDetail> => {
      let url = baseUrl + '/lent/update';
      url = url.replace(/[?&]$/, '');
      let options = {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateLentInput)
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindLentDetail>(response)
      );
    },
    delete: async (
      _id: string
    ): Promise<void> => {
      let url = baseUrl + '/lent/delete';
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

export default LentServiceProxy;