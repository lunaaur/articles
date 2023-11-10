import { UserActionTypes } from "../../types/user";

export const signupUserAction = (value: any) => ({
  type: UserActionTypes.SIGNUP_USER,
  payload: { value },
});

export const editUserAction = (value: number) => ({
  type: UserActionTypes.EDIT_USER,
  payload: { value },
});


