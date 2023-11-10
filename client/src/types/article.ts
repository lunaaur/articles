export interface Articles {
  articles: Article[];
}

export interface Article {
  id: number;
  header: string;
  content: string;
  image: string;
}

export interface ArticleState {
  [x: string]: any;
  articles: Article[];
}

export enum ArticlesActionTypes {
  CREATE_ARTICLE = "CREATE_ARTICLE",
  EDIT_ARTICLE = "EDIT_ARTICLE",
  DELETE_ARTICLE = "DELETE_ARTICLE",
}

interface createArticleAction {
  type: ArticlesActionTypes.CREATE_ARTICLE;
  payload: any[];
}

interface editArticleAction {
  type: ArticlesActionTypes.EDIT_ARTICLE;
  payload: any[];
}

interface deleteArticleAction {
  type: ArticlesActionTypes.DELETE_ARTICLE;
  payload: number;
}

export type ArticleAction =
  | createArticleAction
  | editArticleAction
  | deleteArticleAction;
