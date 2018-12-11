import fetch from 'isomorphic-fetch';
import { IFindRolesResult, ICreateRoleInput, IFindRoleDetail, IUpdateRoleInput, IGetAllRolesResult } from "../api/modules/auth/roles/interface";

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

const RolesServiceProxy = (baseUrl = '', token) => {
  return {
    findRoles: async (
      search: string | null | undefined,
      permissions: string[] | null | undefined,
      isActive: boolean | null | undefined,
      pageNumber: number | null | undefined,
      pageSize: number | null | undefined,
      sortBy: string,
      asc: boolean,
    ): Promise<IFindRolesResult> => {
      let url = baseUrl + '/roles/findRoles?';
      if (search !== undefined) {
        url += 'search=' + encodeURIComponent('' + search) + '&';
      }
      if (permissions !== undefined) {
        permissions.forEach(item => { url += "permissions=" + encodeURIComponent("" + item) + "&"; });
      }
      if (isActive !== undefined) {
        url += 'isActive=' + encodeURIComponent('' + isActive) + '&';
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
        processResponse<IFindRolesResult>(response)
      );
    },
    createRole: async (createRoleInput: ICreateRoleInput): Promise<IFindRoleDetail> => {
      let url = baseUrl + '/roles/createRole';

      let options = {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        },
        body: JSON.stringify(createRoleInput),
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<IFindRoleDetail>(response)
      );
    },
    updateRole: async (updateRoleInput: IUpdateRoleInput): Promise<void> => {
      let url = baseUrl + '/roles/updateRole';

      let options = {
        method: 'PUT',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token ? token : '',
        },
        body: JSON.stringify(updateRoleInput),
      };

      return fetch(url, options as any).then((response: Response) =>
        processResponse<void>(response)
      );
    },
    activateRole: async (roleId: string): Promise<void> => {
      let url = baseUrl + '/roles/activateRole/';
      if (roleId === undefined || roleId === null) {
        throw new Error(
          'The parameter \'roleId\' must be defined and cannot be null.'
        );
      } else {
        url += encodeURIComponent('' + roleId) + '&';
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
    deactivateRole: async (roleId: string): Promise<void> => {
      let url = baseUrl + '/roles/deactivateRole/';
      if (roleId === undefined || roleId === null) {
        throw new Error(
          'The parameter \'roleId\' must be defined and cannot be null.'
        );
      } else {
        url += encodeURIComponent('' + roleId) + '&';
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
    getAllRoles: async (): Promise<IGetAllRolesResult> => {
      let url = baseUrl + '/roles/getAllRoles';
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
        processResponse<IGetAllRolesResult>(response)
      );
    },
  };
};

export default RolesServiceProxy;