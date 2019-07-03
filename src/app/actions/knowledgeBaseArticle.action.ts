import { createAction, props, Action } from '@ngrx/store';
import { KnowledgeArticle } from '../models/KnowledgeArticle';

export const intialSearchKBArticles = createAction(
    '[Find KB Articles] Search KB Articles',
    props<{ searchTerm: string }>()
);

export const intialSearchKBArticlesSuccess = createAction(
    '[Find KB Articles] Search KB Articles Success',
    props<{ results: KnowledgeArticle[], total: number }>()
);

export const intialSearchKBArticlesFailure = createAction(
    '[Find KB Articles] Search KB Articles Fail',
    props<{ errorMsg: string }>()
);

export const selectKBArticle = createAction(
    '[View KB Article] Select KB Article',
    props<{ id: string }>()
);

export const loadMoreKBArticles = createAction(
    '[Load More KB Articles] Load More KB Articles'
);

export const loadMoreKBArticlesSuccess = createAction(
    '[Load More KB Articles] Load More KB Articles Success',
    props<{ results: KnowledgeArticle[] }>()
);

export const loadMoreKBArticlesFailure = createAction(
    '[Load More KB Articles] Load More KB Articles Fail',
    props<{ errorMsg: string }>()
);

// TODO: selectKBArticleSucess/ selectKBArticleFailure
