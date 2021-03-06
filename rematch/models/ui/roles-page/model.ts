import { message } from "antd";
import { createModel, ModelConfig } from "@rematch/core";
import {
  IRolePageState,
  IOpenAddRoleModalPayload,
  ISearchChangePayload,
  IFilterChangePayload,
  IFetchDataPayload,
  IErrorHappenPayload,
  IFetchDataSuccessPayload,
  ICreateNewRoleSuccessPayload,
  IUpdateRoleSuccessPayload,
  IActivateRoleSuccessPayload,
  ICreateNewRolePayload,
  IUpdateRolePayload,
  IActivateRolePayload
} from "./interface";
import { getRolesService } from "../../../../service-proxies";

const rolesPageModel: ModelConfig<IRolePageState> = createModel({
  state: {
    addRoleModalVisible: false,
    isBusy: false,

    data: [],
    total: 0,

    search: "",
    permissions: [],
    pageSize: 10,
    pageNumber: 1,
    sortBy: "name",
    asc: true,

    currentRole: {},
    errorMessage: ""
  },
  reducers: {
    openAddRoleModal: (
      state: IRolePageState,
      payload: IOpenAddRoleModalPayload
    ): IRolePageState => {
      return {
        ...state,
        addRoleModalVisible: true,
        currentRole: payload.currentRole
      };
    },
    closeAddRoleModal: (state: IRolePageState): IRolePageState => {
      return {
        ...state,
        addRoleModalVisible: false,
        currentRole: {},
        errorMessage: '',
      };
    },
    roleInfoChange: (state: IRolePageState, payload: any): IRolePageState => {
      return {
        ...state,
        currentRole: {
          ...state.currentRole,
          ...payload
        }
      };
    },
    searchChangeReducer: (
      state: IRolePageState,
      payload: ISearchChangePayload
    ): IRolePageState => {
      return {
        ...state,
        search: payload.searchValue
      };
    },
    filterChangeReducer: (
      state: IRolePageState,
      payload: IFilterChangePayload
    ): IRolePageState => {
      return {
        ...state,
        permissions: payload.permissions
      };
    },
    fetchDataReducer: (
      state: IRolePageState,
      payload: IFetchDataPayload
    ): IRolePageState => {
      return {
        ...state,
        ...payload,
      };
    },
    errorHappen: (
      state: IRolePageState,
      payload: IErrorHappenPayload
    ): IRolePageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: payload.errorMessage
      };
    },
    starting: (state: IRolePageState): IRolePageState => {
      return {
        ...state,
        isBusy: true
      };
    },
    fetchDataSuccess: (
      state: IRolePageState,
      payload: IFetchDataSuccessPayload
    ): IRolePageState => {
      return {
        ...state,
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      };
    },
    createNewRoleSuccess: (
      state: IRolePageState,
      payload: ICreateNewRoleSuccessPayload
    ): IRolePageState => {
      return {
        ...state,
        isBusy: false,
        addRoleModalVisible: false,
        total: state.total + 1,
        data: [payload.roleInfo, ...state.data],
        currentRole: {},
        errorMessage: ""
      };
    },
    updateRoleSuccess: (
      state: IRolePageState,
      payload: IUpdateRoleSuccessPayload
    ): IRolePageState => {
      return {
        ...state,
        isBusy: false,
        addRoleModalVisible: false,
        data: state.data.map(item => {
          if (item._id === (state.currentRole as any)._id) {
            return {
              ...state.currentRole,
              ...payload.roleInfo
            };
          } else {
            return item;
          }
        })
      };
    },
    activateRoleSuccess: (
      state: IRolePageState,
      payload: IActivateRoleSuccessPayload
    ): IRolePageState => {
      const activatedRole = state.data.filter(
        item => item._id === payload.roleId
      )[0];
      activatedRole.isActive = true;

      return {
        ...state,
        isBusy: false,
        data: state.data.map(item => {
          if (item._id === payload.roleId) {
            return activatedRole;
          } else {
            return item;
          }
        })
      };
    },
    deactivateRoleSuccess: (
      state: IRolePageState,
      payload: IActivateRoleSuccessPayload
    ): IRolePageState => {
      const deactivatedRole = state.data.filter(
        item => item._id === payload.roleId
      )[0];
      deactivatedRole.isActive = false;

      return {
        ...state,
        isBusy: false,
        data: state.data.map(item => {
          if (item._id === payload.roleId) {
            return deactivatedRole;
          } else {
            return item;
          }
        })
      };
    }
  },
  effects: {
    async fetchDataEffect(
      payload: IFetchDataPayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const rolesService = getRolesService();
        const result = await rolesService.findRoles(
          payload.search,
          payload.permissions,
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

        const rolesService = getRolesService();
        const result = await rolesService.findRoles(
          payload.searchValue,
          rootState.rolesPageModel.permissions,
          undefined,
          rootState.rolesPageModel.pageNumber,
          rootState.rolesPageModel.pageSize,
          rootState.rolesPageModel.sortBy,
          rootState.rolesPageModel.asc
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

        const rolesService = getRolesService();
        const result = await rolesService.findRoles(
          rootState.rolesPageModel.search,
          payload.permissions,
          undefined,
          rootState.rolesPageModel.pageNumber,
          rootState.rolesPageModel.pageSize,
          rootState.rolesPageModel.sortBy,
          rootState.rolesPageModel.asc
        );

        this.fetchDataSuccess({ result });
      } catch (error) {
        this.errorHappen(error.message);
        message.error(error.message, 3);
      }
    },
    async createNewRole(
      payload: ICreateNewRolePayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const rolesService = getRolesService();
        const newRole = await rolesService.createRole({
          ...payload.roleInfo,
          isActive: false
        } as any);

        this.createNewRoleSuccess({ roleInfo: newRole });
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async updateRole(
      payload: IUpdateRolePayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const rolesService = getRolesService();
        await rolesService.updateRole({
          ...payload.roleInfo
        });

        this.updateRoleSuccess({ roleInfo: payload.roleInfo });
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async activateRole(
      payload: IActivateRolePayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const rolesService = getRolesService();
        await rolesService.activateRole(payload.roleId);

        this.activateRoleSuccess(payload);
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async deactivateRole(
      payload: IActivateRolePayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();

        const rolesService = getRolesService();
        await rolesService.deactivateRole(payload.roleId);

        this.deactivateRoleSuccess(payload);
      } catch (error) {
        message.error(error.message, 3);
      }
    }
  }
});

export default rolesPageModel;
