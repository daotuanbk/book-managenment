export interface IProfileState {
  _id: string;
  email: string;
  profileImgUrl: string;
  fullName: string;
  dob: Date|undefined;
  phoneNumber: string;
  i18n: string;
  permissions: string[];
  roles: string[];

  exp?: number;
  iat?: number;

  token: string;
  isLoggedIn: boolean;
  currentLanguage: string;
}

export interface IUpdateProfile {
  token: string;
}