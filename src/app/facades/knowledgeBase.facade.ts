import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { intialSearchKBArticles,  } from '../actions/knowledgeBaseArticle.action';
import { getAllArticles } from '../selectors/knowledgeBaseArticle.selector';
import { KnowledgeArticle } from '../models/KnowledgeArticle';
import { getTotalObjectsCount } from './../selectors/knowledgeBaseArticle.selector';
import { KBState } from './../states/knowledgeBaseArticle.state';

@Injectable()
export class KnowledgeBaseFacade {
  searchArticles$: Observable<KnowledgeArticle[]>;
  searchResultCount$: Observable<number>;

  constructor(private store: Store<KBState>) {
    this.searchArticles$ = this.store.select(getAllArticles);
    this.searchResultCount$ = this.store.select(getTotalObjectsCount);
  }

  search(searchString: string) {
    this.store.dispatch(intialSearchKBArticles({searchTerm: searchString}));
  }
}
