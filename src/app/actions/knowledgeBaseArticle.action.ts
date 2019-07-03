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

// TODO: selectKBArticleSucess/ selectKBArticleFailure

export const loadNextPageKBArticles = createAction(
    '[Load More KB Articles] Load Next Page KB Articles'
);

export const loadNextPageKBArticlesSuccess = createAction(
    '[Load More KB Articles] Load Next Page Articles Success',
    props<{ results: KnowledgeArticle[] }>()
);

export const loadNextPageKBArticlesFailure = createAction(
    '[Load More KB Articles] Load Next Page Articles Fail',
    props<{ errorMsg: string }>()
);


