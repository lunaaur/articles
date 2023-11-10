import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { articleReducer } from "./articleReducer";
import { userIdReducer } from "./userIdReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  articles: articleReducer,
  token: userIdReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
