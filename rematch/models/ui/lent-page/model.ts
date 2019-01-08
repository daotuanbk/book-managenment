import { createModel, ModelConfig } from "@rematch/core";
import { IErrorHappenPayload, ILentPageState, IGetLentByIdEffect, IUpdateLentEffect, IFetchDataSuccessPayload, IGetLentByIdSuccess } from "./interface";
import { message } from 'antd';
import { IFetchDataPayload } from "../books-page/interface";
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
        this.fetchDataSuccess({result});
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
        await LentService.update(payload);
        this.updateLentSuccess();
        message.success('Update Lent Successful', 3);
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async getLentByIdEffect(
      payload: IGetLentByIdEffect,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const LentService = getLentService();
        const data = await LentService.findLentById(payload._id);
        this.getLentByIdSuccess({data: data})
      } catch (error) {
        message.error(error.message, 3);
      }
    },
  },
});

export default lentPageModel;