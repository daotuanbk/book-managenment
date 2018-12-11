import { createModel, ModelConfig } from "@rematch/core";
import { message } from "antd";
import { getUsersService, getRolesService } from "../../../../service-proxies";
import { IUsersPageState, IOpenAddUserModalPayload, ISearchChangePayload, IFilterChangePayload, IFetchDataPayload, IErrorHappenPayload, IFetchDataSuccessPayload, ICreateNewUserSuccessPayload, IUpdateUserSuccessPayload, IActivateUserSuccessPayload, ICreateNewUserPayload, IUpdateUserPayload, IActivateUserPayload, IFetchRoleListSuccess } from "./interface";

const usersPageModel: ModelConfig<IUsersPageState> = createModel({
  state: {
    addUserModalVisible: false,
    isBusy: false,

    data: [],
    total: 0,

    search: "",
    filter: '',
    pageSize: 10,
    pageNumber: 1,
    sortBy: "email",
    asc: true,

    currentUser: {},
    errorMessage: "",

    roleList: [],
  },
  reducers: {
    openAddUserModal: (
      state: IUsersPageState,
      payload: IOpenAddUserModalPayload
    ): IUsersPageState => {
      return {
        ...state,
        addUserModalVisible: true,
        currentUser: payload.currentUser
      };
    },
    closeAddUserModal: (state: IUsersPageState): IUsersPageState => {
      return {
        ...state,
        addUserModalVisible: false,
        currentUser: {},
        errorMessage: '',
      };
    },
    userInfoChange: (state: IUsersPageState, payload: any): IUsersPageState => {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          ...payload,
        }
      };
    },
    searchChangeReducer: (
      state: IUsersPageState,
      payload: ISearchChangePayload
    ): IUsersPageState => {
      return {
        ...state,
        search: payload.searchValue
      };
    },
    filterChangeReducer: (
      state: IUsersPageState,
      payload: IFilterChangePayload
    ): IUsersPageState => {
      return {
        ...state,
        filter: payload.filterValue
      };
    },
    fetchDataReducer: (
      state: IUsersPageState,
      payload: IFetchDataPayload
    ): IUsersPageState => {
      return {
        ...state,
        ...payload,
      };
    },
    errorHappen: (
      state: IUsersPageState,
      payload: IErrorHappenPayload
    ): IUsersPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: payload.errorMessage
      };
    },
    starting: (state: IUsersPageState): IUsersPageState => {
      return {
        ...state,
        isBusy: true
      };
    },
    fetchDataSuccess: (
      state: IUsersPageState,
      payload: IFetchDataSuccessPayload
    ): IUsersPageState => {
      return {
        ...state,
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data,
      };
    },
    createNewUserSuccess: (
      state: IUsersPageState,
      payload: ICreateNewUserSuccessPayload
    ): IUsersPageState => {
      return {
        ...state,
        isBusy: false,
        addUserModalVisible: false,
        total: state.total + 1,
        data: [payload.userInfo, ...state.data],
        currentUser: {},
        errorMessage: ""
      };
    },
    updateUserSuccess: (
      state: IUsersPageState,
      payload: IUpdateUserSuccessPayload
    ): IUsersPageState => {
      return {
        ...state,
        isBusy: false,
        addUserModalVisible: false,
        data: state.data.map(item => {
          if (item._id === (state.currentUser as any)._id) {
            return {
              ...state.currentUser,
              ...payload.userInfo
            };
          } else {
            return item;
          }
        })
      };
    },
    activateUserSuccess: (
      state: IUsersPageState,
      payload: IActivateUserSuccessPayload
    ): IUsersPageState => {
      const activatedUser = state.data.filter(
        item => item._id === payload.userId
      )[0];
      activatedUser.isActive = true;

      return {
        ...state,
        isBusy: false,
        data: state.data.map(item => {
          if (item._id === payload.userId) {
            return activatedUser;
          } else {
            return item;
          }
        })
      };
    },
    deactivateuserSuccess: (
      state: IUsersPageState,
      payload: IActivateUserSuccessPayload
    ): IUsersPageState => {
      const deactivatedUser = state.data.filter(
        item => item._id === payload.userId
      )[0];
      deactivatedUser.isActive = false;

      return {
        ...state,
        isBusy: false,
        data: state.data.map(item => {
          if (item._id === payload.userId) {
            return deactivatedUser;
          } else {
            return item;
          }
        })
      };
    },
    fetchRoleListSuccess: (state: IUsersPageState, payload: IFetchRoleListSuccess): IUsersPageState => {
      return {
        ...state,
        roleList: payload.roleList,
      };
    },
  },
  effects: {
    async fetchDataEffect(
      payload: IFetchDataPayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const usersService = getUsersService();
        const result = await usersService.findUsers(
          payload.search,
          payload.filter,
          undefined,
          undefined,
          payload.pageNumber,
          payload.pageSize,
          payload.sortBy,
          payload.asc
        );

        this.fetchDataSuccess({ result });
      } catch (error) {
        this.errorHappen(error.message);
        message.error(error.message, 3);
      }
    },
    async searchChangeEffect(
      payload: ISearchChangePayload,
      rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const usersService = getUsersService();
        const result = await usersService.findUsers(
          payload.searchValue,
          rootState.usersPageModel.filter,
          undefined,
          undefined,
          rootState.usersPageModel.pageNumber,
          rootState.usersPageModel.pageSize,
          rootState.usersPageModel.sortBy,
          rootState.usersPageModel.asc
        );

        this.fetchDataSuccess({ result });
      } catch (error) {
        this.errorHappen(error.message);
        message.error(error.message, 3);
      }
    },
    async filterChangeEffect(
      payload: IFilterChangePayload,
      rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const usersService = getUsersService();
        const result = await usersService.findUsers(
          rootState.usersPageModel.search,
          payload.filterValue,
          undefined,
          undefined,
          rootState.usersPageModel.pageNumber,
          rootState.usersPageModel.pageSize,
          rootState.usersPageModel.sortBy,
          rootState.usersPageModel.asc
        );

        this.fetchDataSuccess({ result });
      } catch (error) {
        this.errorHappen(error.message);
        message.error(error.message, 3);
      }
    },
    async createNewUser(
      payload: ICreateNewUserPayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const usersService = getUsersService();
        const newuser = await usersService.createUser({
          ...payload.userInfo,
          isActive: false
        } as any);

        this.createNewUserSuccess({ userInfo: newuser });
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async updateUser(
      payload: IUpdateUserPayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const usersService = getUsersService();
        await usersService.updateUser({
          ...payload.userInfo
        });

        this.updateUserSuccess({ userInfo: payload.userInfo });
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async activateUser(
      payload: IActivateUserPayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const usersService = getUsersService();
        await usersService.activateUser(payload.userId);

        this.activateUserSuccess(payload);
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async deactivateUser(
      payload: IActivateUserPayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const usersService = getUsersService();
        await usersService.deactivateUser(payload.userId);

        this.deactivateUserSuccess(payload);
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async fetchRoleList(): Promise<void> {
      try {
        const rolesService = getRolesService();
        const roleList = await rolesService.getAllRoles();

        this.fetchRoleListSuccess({roleList: roleList.data});
      } catch (error) {
        console.log(error);
      }
    },
  }
});

export default usersPageModel;
