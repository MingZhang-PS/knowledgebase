
import { KnowledgeBaseFacade } from './../../facades/knowledgeBase.facade';
import { KnowledgeArticle } from 'src/app/models/KnowledgeArticle';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kb-container',
  templateUrl: './kb-container.component.html',
  styleUrls: ['./kb-container.component.css']
})
export class KbContainerComponent implements OnInit {
  searchedArticles$: Observable<KnowledgeArticle[]>;
  searchResultsCount$: Observable<number>;

  constructor(private facade: KnowledgeBaseFacade) {
    this.searchedArticles$ = facade.searchArticles$;
    this.searchResultsCount$ = facade.searchResultCount$;
  }

  ngOnInit() {

  }

  onSearch(searchTerm: string) {
    // call facdes to trigger search action
    this.facade.search(searchTerm);
  }
}
