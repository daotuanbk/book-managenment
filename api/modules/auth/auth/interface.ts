export interface ILoginInput {
  email: string;
  password: string;
}

export interface ITokenData {
  _id: string;
  email: string;
  profileImgUrl: string;
  fullName: string;
  dob: Date;
  phoneNumber: string;
  i18n: string;
  permissions: string[];
  roles: string[];

  exp?: number;
  iat?: number;
}