import { UserIdActionTypes } from "../../types/user";

export const createTokenAction = (value: any) => ({
  type: UserIdActionTypes.CREATE_TOKEN,
  payload: { value },
});

export const removeTokenAction = (value: number) => ({
  type: UserIdActionTypes.REMOVE_TOKEN,
  payload: { value },
});
