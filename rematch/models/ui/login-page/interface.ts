export interface ILoginPageState {
  email: string;
  password: string;
  remember: boolean;
  
  isBusy: boolean;
  errorMessage: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IErrorHappenPayload {
  errorMessage: string;
}