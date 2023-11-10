import { ArticlesActionTypes } from "../../types/article";

export const createArticleAction = (value: any) => ({
  type: ArticlesActionTypes.CREATE_ARTICLE,
  payload: { value },
});

export const deleteArticleAction = (value: number) => ({
  type: ArticlesActionTypes.DELETE_ARTICLE,
  payload: { value },
});

export const editArtickeAction = (value: any) => ({
  type: ArticlesActionTypes.EDIT_ARTICLE,
  payload: { value },
});
