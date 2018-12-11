import { createModel, ModelConfig } from "@rematch/core";
import { IProfileState, IUpdateProfile } from "./interface";
import * as jwtDecode from 'jwt-decode';

const profileModel: ModelConfig<IProfileState> = createModel({
  state: {
    _id: '',
    email: '',
    profileImgUrl: '',
    fullName: '',
    dob: undefined,
    phoneNumber: '',
    i18n: '',
    permissions: [],
    roles: [],

    token: '',
    isLoggedIn: false,
    currentLanguage: 'vi'
  },
  reducers: {
    'loginPageModel/loginSuccess': (state: IProfileState, payload: IUpdateProfile): IProfileState => {
      const tokenData = jwtDecode(payload.token);

      return {
        ...state,
        ...tokenData,
        token: payload.token,
        isLoggedIn: true,
      };
    },
    logOut: (state: IProfileState): IProfileState => {
      return {
        ...state,
        _id: '',
        email: '',
        profileImgUrl: '',
        fullName: '',
        dob: undefined,
        phoneNumber: '',
        i18n: '',
        permissions: [],
        roles: [],

        token: '',
        isLoggedIn: false,
      };
    },
    onChangeLanguage: (state: IProfileState): IProfileState => {
        if (state.currentLanguage === 'vi') {
            return {
                ...state,
                currentLanguage: 'en'
            }
        } else if (state.currentLanguage === 'en') {
            return {
                ...state,
                currentLanguage: 'vi'
            }
        }

      },
  },
  effects: {},
});

export default profileModel;