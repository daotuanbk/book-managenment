import { createModel, ModelConfig } from "@rematch/core";
import { IBookPageState, IErrorHappenPayload, IFetchDataPayload, IFetchDataSuccessPayload, IOnChangeFileList, IUpdateBookEffect, ISearchChangeEffect, ICreateNewBookEffect, IGetBookByIdEffect, IGetBookByIdSuccess, IOnChangeSearchValue, IPaginationChange, IOnConfirmModal, IHandleDatePickerChange } from "./interface";
import { getBooksService, getLentService } from "../../../../service-proxies";
import config from '../../../../configs/default.config';
import { message } from 'antd';
import moment from "moment";
const booksPageModel: ModelConfig<IBookPageState> = createModel({
  state: {
    data: [],
    isBusy: false,
    errorMessage: '',
    searchInput: '',
    pageNumber: 1,
    pageSize: 10,
    sortBy: 'title',
    asc: true,
    total: 0,
    fileList: [],
    modalVisible: false,
    indexPageSize: 12,
    dateOfAppointment: moment(new Date(), 'DD/MM/YYYY') as any,
  },
  reducers: {
    starting: (state: IBookPageState): IBookPageState => {
      return {
        ...state,
        isBusy: true
      };
    },
    errorHappen: (
      state: IBookPageState,
      payload: IErrorHappenPayload
    ): IBookPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: payload.errorMessage
      };
    },
    onChangeSearchValue: (
      state: IBookPageState,
      payload: IOnChangeSearchValue
    ): IBookPageState => {
      return {
        ...state,
        searchInput: payload.searchValue,
      };
    },
    fetchDataSuccess: (
      state: IBookPageState,
      payload: IFetchDataSuccessPayload
    ): IBookPageState => {
      return {
        ...state,
        isBusy: false,
        total: payload.result.total,
        data: payload.result.data
      };
    },
    onChangeFileList: (
      state: IBookPageState,
      payload: IOnChangeFileList
    ): IBookPageState => {
      return {
        ...state,
        fileList: [payload.file],
      };
    },
    createNewBookSuccess: (
      state: IBookPageState,
    ): IBookPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: '',
      };
    },
    updateBookSuccess: (
      state: IBookPageState,
      payload: any,
    ): IBookPageState => {
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
    getBookByIdSuccess: (
      state: IBookPageState,
      payload: IGetBookByIdSuccess
    ): IBookPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: '',
        data: [payload.data],
      }
    },
    onOpenModal: (
      state: IBookPageState,
    ): IBookPageState => {
      return {
        ...state,
        modalVisible: true,
      }
    },
    onCancelModal: (
      state: IBookPageState,
    ): IBookPageState => {
      return {
        ...state,
        modalVisible: false,
      }
    },
    onConfirmModalSuccess: (
      state: IBookPageState,
    ): IBookPageState => {
      message.success('Mượn sách thành công');
      return {
        ...state,
        modalVisible: false,
        data: state.data.map((value, index) => {
          if (index === 0) {
            return {
              ...value,
              quantity: value.quantity - 1
            }
          }
        })
      }
    },
    handlePaginationChange: (
      state: IBookPageState,
      payload: IPaginationChange
    ): IBookPageState => {
      return {
        ...state,
        pageNumber: payload.current,
        pageSize: payload.pageSize
      };
    },
    handleDatePickerChange: (
      state: IBookPageState,
      payload: IHandleDatePickerChange
    ): IBookPageState => {
      return {
        ...state,
        dateOfAppointment: payload.date,
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
        const bookService = getBooksService();
        const result = await bookService.findBook(
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
    async fetchActiveDataEffect(
      payload: IFetchDataPayload,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const bookService = getBooksService();
        const result = await bookService.findActiveBook(
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
    async searchChangeEffect(
      payload: ISearchChangeEffect,
      rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const bookService = getBooksService();
        const result = await bookService.findBook(
          payload.searchValue,
          rootState.booksPageModel.pageNumber,
          rootState.booksPageModel.pageSize,
          rootState.booksPageModel.sortBy,
          rootState.booksPageModel.asc,
        );
        this.fetchDataSuccess({ result });
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async createNewBookEffect(
      payload: ICreateNewBookEffect,
      rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const bookService = getBooksService();
        const newBook = await bookService.create({
          ...payload,
          coverUrl: 'none',
        });
        let formData = new FormData();
        rootState.booksPageModel.fileList.forEach((file) => {
          formData.set('image', file);
        });
        await fetch(
          `${config.nextjs.apiUrl}/images/upload/book/${newBook._id}`, {
            method: 'POST',
            headers: {
              'authorization': rootState.profileModel.token,
            },
            body: formData,
          }
        );
        await bookService.update({
          _id: newBook._id,
          coverUrl: rootState.booksPageModel.fileList.length === 0 ? 'none' : `/static/images/book/image-${newBook._id}.${rootState.booksPageModel.fileList[0].type.slice(6, 10)}`
        } as any);

        this.createNewBookSuccess();
        message.success('Create New Book Successful', 3);
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async updateBookEffect(
      payload: IUpdateBookEffect,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const bookService = getBooksService();
        const result = await bookService.update(payload);
        this.updateBookSuccess({ result: result });
        message.success('Update Book Successful', 3);
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async getBookByIdEffect(
      payload: IGetBookByIdEffect,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();
        const bookService = getBooksService();
        const data = await bookService.findBookById(payload._id);
        this.getBookByIdSuccess({ data: data })
      } catch (error) {
        message.error(error.message, 3);
      }
    },
    async onConfirmModal(
      payload: IOnConfirmModal,
      _rootState: any
    ): Promise<void> {
      try {
        this.starting();
        if (moment(payload.dateOfAppointment as any).toString() === moment(payload.dateBorrow as any).toString()) {
          message.error('Vui lòng chọn ngày hợp lệ')
        } else {
          const borrowPrice = payload.borrowPrice * (payload.dateOfAppointment as any).diff(payload.dateBorrow, 'days');
          if (borrowPrice && ((borrowPrice < 0) || (moment(Date.now()).format('YYYY MM DD') === moment(payload.dateOfAppointment as any).format('YYYY MM DD')))) {
            message.error('Vui lòng chọn ngày hợp lệ')
          } else {
            const lentService = getLentService();
            const data = await lentService.create({
              bookId: String(payload.bookId),
              userId: String(payload.userId),
              dateBorrow: payload.dateBorrow,
              dateOfAppointment: payload.dateOfAppointment,
              borrowPrice: borrowPrice,
              status: payload.status
            })
            this.onConfirmModalSuccess({ data: data })
          }
        }
      } catch (error) {
        message.error('Vui lòng chọn ngày hợp lệ')     
      }
    },
  },
});

export default booksPageModel;