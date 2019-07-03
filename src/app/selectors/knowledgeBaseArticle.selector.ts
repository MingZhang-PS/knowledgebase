import { createFeatureSelector, createSelector } from '@ngrx/store';

import { KBState } from '../states/knowledgeBaseArticle.state';
import * as fromReducer from '../reducers/knowledgeBaseArticle.reducer';
import { FEATURE_NAME } from './../shared/consts';

export const rootState = createFeatureSelector<KBState>(FEATURE_NAME);

export const getAllArticles = createSelector(
    rootState,
    fromReducer.selectAllArticles
);

export const getLoaded = createSelector(
    rootState,
    (state) => state.loaded
);

export const getLoading = createSelector(
    rootState,
    (state) => state.isLoading
);

export const getCurrentPage = createSelector(
    rootState,
    (state) => state.currentPage
);

export const getTotalObjectsCount = createSelector(
    rootState,
    (state) => state.totalObjectCount
);

export const getPageSize = createSelector(
    rootState,
    (state) => state.pageSize
);

export const getSearchTerm = createSelector(
    rootState,
    (state) => state.searchTerm
);
