import { createModel, ModelConfig } from "@rematch/core";
import Router from 'next/router';
import * as qs from 'qs';
import { ILoginPageState, ILoginPayload, IErrorHappenPayload } from "./interface";
import { getAuthService } from "../../../../service-proxies";
import { IUpdateProfile } from "../../profile/interface";

const loginPageModel: ModelConfig<ILoginPageState> = createModel({
  state: {
    email: '',
    password: '',
    remember: false,

    isBusy: false,
    errorMessage: '',
  },
  reducers: {
    loginInfoChange: (state: ILoginPageState, payload: any): ILoginPageState => {
      return {
        ...state,
        ...payload,
      };
    },
    starting: (state: ILoginPageState): ILoginPageState => {
      return {
        ...state,
        isBusy: true
      };
    },
    errorHappen: (
      state: ILoginPageState,
      payload: IErrorHappenPayload
    ): ILoginPageState => {
      return {
        ...state,
        isBusy: false,
        errorMessage: payload.errorMessage
      };
    },
    loginSuccess: (state: ILoginPageState, _payload: IUpdateProfile): ILoginPageState => {
      return {
        ...state,
      };
    }
  },
  effects: {
    async login(payload: ILoginPayload, _rootState: any): Promise<void> {
      try {
        this.starting();

        const authService = getAuthService();
        const result = await authService.loginLocal(payload);


        this.loginSuccess({token: result.token});

        const callbackUrl = qs.parse(window.location.search, { ignoreQueryPrefix: true })
          .callbackUrl;
        if (callbackUrl) {
          Router.push(callbackUrl);
        } else {
          Router.push('/');
        }
      } catch (error) {
        console.log(error);
        this.errorHappen({errorMessage: error.message});
      }
    }
  },
});

export default loginPageModel;