export interface IUser {
  id: string;
  name: string;
  login: string;
  password: string;
  image?: string;
}

export interface IUserId {
  id: string;
}

export enum UserIdActionTypes {
  CREATE_TOKEN = "CREATE_TOKEN",
  REMOVE_TOKEN = "REMOVE_TOKEN",
}
interface CreateTokenAction {
  type: UserIdActionTypes.CREATE_TOKEN;
  payload: any;
}
interface RemoveTokenAction {
  type: UserIdActionTypes.REMOVE_TOKEN;
  payload: any;
}

export interface UserIdState {
  user: IUserId;
}

export interface UserState {
  users: IUser[];
}
export enum UserActionTypes {
  SIGNUP_USER = "SIGNUP_USER",
  EDIT_USER = "EDIT_USER",
}
interface SingupUsersAction {
  type: UserActionTypes.SIGNUP_USER;
  payload: any[];
}
interface SigninSuccessAction {
  type: UserActionTypes.EDIT_USER;
  payload: any[];
}

export type UserIdAction = CreateTokenAction | RemoveTokenAction;
export type UserAction = SingupUsersAction | SigninSuccessAction;
