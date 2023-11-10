import {
  ArticleAction,
  ArticlesActionTypes,
  ArticleState,
  Article,
} from "../../types/article";

const initialState: ArticleState = {
  articles: [
    {
      id: 0,
      header: "Trips",
      content: "About trips",
      image: "map.jpg",
    },
    {
      id: 1,
      header: "Flights",
      content: "About flights",
      image: "flight.jpg",
    },
    {
      id: 2,
      header: "Why hitchhiking is dangerous?",
      content: "About hitchhikin",
      image: "hitchhiking.jpg",
    },
    {
      id: 3,
      header: "I choose myself and forest",
      content: "About life priorities",
      image: "forest.jpeg",
    },
  ],
};

export const articleReducer = (
  state = initialState,
  action: ArticleAction
): ArticleState => {
  switch (action.type) {
    case ArticlesActionTypes.CREATE_ARTICLE:
      return {
        ...state,
        articles: state.articles.concat(action.payload)

      };
    case ArticlesActionTypes.DELETE_ARTICLE:
      return state.filter((article: Article) => article.id !== action.payload);
    case ArticlesActionTypes.EDIT_ARTICLE:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};
