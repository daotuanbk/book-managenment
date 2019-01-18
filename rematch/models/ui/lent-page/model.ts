import { createModel, ModelConfig } from "@rematch/core";
import { IErrorHappenPayload, ILentPageState, IGetLentByIdEffect, IUpdateLentEffect, IFetchDataSuccessPayload, IGetLentByIdSuccess, IGetLentByUserId } from "./interface";
import { message } from 'antd';
import { IFetchDataPayload, IPaginationChange } from "../books-page/interface";
import { getLentService } from "../../../../service-proxies";

const lentPageModel: ModelConfig<ILentPageState> = createModel({
  state: {
    data: [],
    isBusy: false,
    errorMessage: '',
    searchInput: '',
    pageNumber: 1,
    pageSize: 10,
    sortBy: 'dateBorrow',
    asc: true,
    total: 0,
  },
  reducers: {
    starting: (state: ILentPageState): ILentPageState => {
      return {
        ...state,
        isBusy: true
      };
    },
    errorHappen: (
      state: ILentPageState,
      payload: IErrorHappenPayload
    ): ILentPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: payload.errorMessage
      };
    },
    fetchDataSuccess: (
      state: ILentPageState,
      payload: IFetchDataSuccessPayload
    ): ILentPageState => {
      return {
        ...state,
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      };
    },
    updateBookSuccess: (
      state: ILentPageState,
    ): ILentPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: '',
      };
    },
    getBookByIdSuccess: (
      state: ILentPageState,
      payload: IGetLentByIdSuccess
    ): ILentPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: '',
        data: [payload.data],
      }
    },
    handlePaginationChange: (
      state: ILentPageState,
      payload: IPaginationChange
    ): ILentPageState => {
      return {
        ...state,
        pageNumber: payload.current,
        pageSize: payload.pageSize
      };
    },
    updateLentSuccess: (
      state: ILentPageState,
      payload: any,
    ): ILentPageState  => {
      return {
        ...state,
        data: state.data.map((value, _index) => {
          if (value._id === payload.result._id) {
            return payload.result
          } else {
            return value
          }
        }),
        isBusy: false,
        errorMessage: '',
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
        const LentService = getLentService();
        const result = await LentService.findLent(
          payload.search,
          payload.pageNumber,
          payload.pageSize,
          payload.sortBy,
          payload.asc
        );
        this.fetchDataSuccess({ result });
      } catch (error) {
        console.log(error);
      }
    },
    async updateLentEffect(
      payload: IUpdateLentEffect,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const LentService = getLentService();
        const result = await LentService.update(payload);
        this.updateLentSuccess({ result : result });
        message.success('Update Lent Successful', 3);
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async getLentByUserIdEffect(
      payload: IGetLentByUserId,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const LentService = getLentService();
        const result = await LentService.findLentByUserId(
          payload.userId,
          payload.pageNumber,
          payload.pageSize,
          payload.sortBy,
          payload.asc
        );
        this.fetchDataSuccess({ result });
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default lentPageModel;