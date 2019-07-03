import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { catchError, map, withLatestFrom, switchMap } from 'rxjs/operators';

import * as KnowledgeBaseArticleAction from '../actions/knowledgeBaseArticle.action';
import { KnowlegdeBaseArticleService } from '../services/knowlegdeBaseArticle.service';
import { getCurrentPage, getSearchTerm, getTotalObjectsCount } from '../selectors/knowledgeBaseArticle.selector';
import { getPageSize } from './../selectors/knowledgeBaseArticle.selector';
import { KBState } from './../states/knowledgeBaseArticle.state';
import { KnowledgeArticle } from 'src/app/models/KnowledgeArticle';
import { ResponseWrapper } from './../services/responseWrapper';

@Injectable()
export class KnowledgeBaseEffects {
    constructor(
        private actions$: Actions,
        private store$: Store<KBState>,
        private knowledgeBaseService: KnowlegdeBaseArticleService
    ) { }


    @Effect()
    search$: Observable<Action> = this.actions$.pipe(
        ofType(KnowledgeBaseArticleAction.intialSearchKBArticles),
        withLatestFrom(this.store$.select(getCurrentPage)),
        withLatestFrom(this.store$.select(getPageSize)),
        switchMap(([[action, curPage], pageSize]) =>
            // TODO: what will happen if another HTTP request is sent before current search is not returned from server?
            this.knowledgeBaseService.searchKnowledgeArticle(action.searchTerm, curPage, pageSize).pipe(
                map(resp => {
                    return KnowledgeBaseArticleAction.intialSearchKBArticlesSuccess({
                        results: this.transform(resp),
                        total: resp.totalObjectCount
                    });
                }),
                catchError(err =>
                    of(KnowledgeBaseArticleAction.intialSearchKBArticlesFailure(err))
                )
            )
        )
    );

    @Effect()
    loadNextPage$: Observable<Action> = this.actions$.pipe(
        ofType(KnowledgeBaseArticleAction.loadNextPageKBArticles),
        withLatestFrom(this.store$.select(getSearchTerm)),
        withLatestFrom(this.store$.select(getCurrentPage)),
        withLatestFrom(this.store$.select(getPageSize)),
        withLatestFrom(this.store$.select(getTotalObjectsCount)),
        switchMap(([[[[action, searchTerm], curPage], pageSize], total]) =>
            // TODO: what will happen if another HTTP request (triggered by fast scroll typically) is sent
            // before current search is not returned from server?
            this.knowledgeBaseService.searchKnowledgeArticle(searchTerm, ++curPage, pageSize).pipe(
                map(resp => {
                    return KnowledgeBaseArticleAction.loadNextPageKBArticlesSuccess({
                        results: this.transform(resp)
                    });
                }),
                catchError(err =>
                    of(KnowledgeBaseArticleAction.loadNextPageKBArticlesFailure(err))
                )
            )
        )
    );

    private transform(resp: ResponseWrapper<KnowledgeArticle>) {
        /* tslint:disable:no-string-literal */
        return [...resp.data].map(a => a['KnowledgeBaseArticle']).filter(el => el != null);
        /* tslint:enable:no-string-literal */
    }
}
