import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState: UserState = {
  users: [],
};

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.SIGNUP_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case UserActionTypes.EDIT_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
};
