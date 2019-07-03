import { Injectable } from '@angular/core';

import { Actions, ofType, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of, Observable, from } from 'rxjs';
import { catchError, map, withLatestFrom, switchMap } from 'rxjs/operators';

import * as KnowledgeBaseArticleAction from '../actions/knowledgeBaseArticle.action';
import { KnowlegdeBaseArticleService } from '../services/knowlegdeBaseArticle.service';
import { getCurrentPage } from '../selectors/knowledgeBaseArticle.selector';
import { getPageSize } from './../selectors/knowledgeBaseArticle.selector';
import { KBState } from './../states/knowledgeBaseArticle.state';

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
                    const kbArticles = [...resp.data].map(a => a['KnowledgeBaseArticle']).filter(el => el != null);
                    return KnowledgeBaseArticleAction.intialSearchKBArticlesSuccess({
                        results: kbArticles,
                        total: resp.totalObjectCount
                    });
                }),
                catchError(err =>
                    of(KnowledgeBaseArticleAction.intialSearchKBArticlesFailure(err))
                )
            )
        )
    );
}
