import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as KnowledgeBaseArticleActions from '../actions/knowledgeBaseArticle.action';
import { KBState } from '../states/knowledgeBaseArticle.state';
import { KnowledgeArticle } from './../models/KnowledgeArticle';
import { PAGESIZE } from '../shared/consts';

export const adapter: EntityAdapter<KnowledgeArticle> = createEntityAdapter<KnowledgeArticle>({
    sortComparer: false,
    selectId: (kba: KnowledgeArticle) => kba.id
});

const initialState: KBState = adapter.getInitialState({
    isLoading: false,
    loaded: false,
    currentPage: 0, // start page number from 0
    totalObjectCount: 0,
    pageSize: PAGESIZE,
    search: '',
    selectedId: null
});

export const KBReducer = createReducer(
    initialState,
    on(KnowledgeBaseArticleActions.intialSearchKBArticles, (state, { searchTerm }) => {
        if (searchTerm && searchTerm.trim().length > 0) {
            return {
                ...state,
                isLoading: true,
                loaded: false,
                searchTerm
            };

        } else {
            // const newState = adapter.removeAll(state);
            return {
                ...state,
                initialState
            };
        }
    }),
    on(KnowledgeBaseArticleActions.intialSearchKBArticlesSuccess, (state, { results, total }) => {
        let newState = state;
        if (results && results.length > 0) {
            newState = adapter.addAll(results, state);
        }
        return {
            ...newState,
            isLoading: false,
            loaded: true,
            totalObjectCount: total
        };
        // TODO: how to handle the actualPage and selectedId?
    }),
    on(KnowledgeBaseArticleActions.intialSearchKBArticlesFailure, (state, { errorMsg }) => {
        return state;
    }),
    on(KnowledgeBaseArticleActions.loadNextPageKBArticles, (state) => {
        return {
            ...state,
            isLoading: true,
            loaded: false
        };
    }),
    on(KnowledgeBaseArticleActions.loadNextPageKBArticlesSuccess, (state, {results}) => {
        let newState = state;
        let curPage = state.currentPage;
        if (results && results.length > 0) {
            newState = adapter.addMany(results, state);
            curPage += 1;
        }
        return {
            ...newState,
            isLoading: false,
            loaded: true,
            currentPage: curPage
        };
    })
);

export const {
    selectAll: selectAllArticles
} = adapter.getSelectors();
