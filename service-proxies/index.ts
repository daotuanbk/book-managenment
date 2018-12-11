
import config from "../configs";
import UsersServiceProxy from "./users-service-proxy";
import RolesServiceProxy from "./roles-service-proxy";
import AuthServiceProxy from "./auth-service-proxy";
import UploadImagesServiceProxy from "./upload-images-service-proxy";
import BooksServiceProxy from "./books-service-proxy";


const getUsersService = (token = '') => {
  return UsersServiceProxy(config.nextjs.apiUrl, token);
};

const getRolesService = (token = '') => {
  return RolesServiceProxy(config.nextjs.apiUrl, token);
};

const getAuthService = (token = '') => {
  return AuthServiceProxy(config.nextjs.apiUrl, token);
};

const getUploadImagesService = (token = '') => {
  return UploadImagesServiceProxy(config.nextjs.apiUrl, token);
}

const getBooksService = (token = '') => {
  return BooksServiceProxy(config.nextjs.apiUrl, token);
}

export {
  getUsersService,
  getRolesService,
  getAuthService,
  getUploadImagesService,
  getBooksService,
};