import { init } from '@rematch/core';
import rolesPageModel from './models/ui/roles-page/model';
import usersPageModel from './models/ui/users-page/model';
import loginPageModel from './models/ui/login-page/model';
import booksPageModel from './models/ui/books-page/model';
import profileModel from './models/profile/model';
import lentPageModel from './models/ui/lent-page/model';

export const initStore = (initialState: any = {}) => {
  return init({
    models: {
      profileModel,
      loginPageModel,
      rolesPageModel,
      usersPageModel,
      booksPageModel,
      lentPageModel,
    },
    redux: {
      initialState
    }
  });
};

export default initStore;