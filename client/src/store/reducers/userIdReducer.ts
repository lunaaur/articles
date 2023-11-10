import { UserIdAction, UserIdActionTypes, UserIdState } from "../../types/user";

const initialState: UserIdState = {
  user: {
    id: "",
  },
};

export const userIdReducer = (
  state = initialState,
  action: UserIdAction
): UserIdState => {
  switch (action.type) {
    case UserIdActionTypes.CREATE_TOKEN:
      return { ...state, user: action.payload };
    case UserIdActionTypes.REMOVE_TOKEN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
