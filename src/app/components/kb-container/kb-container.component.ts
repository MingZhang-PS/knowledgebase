
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, auditTime, throttleTime } from 'rxjs/operators';

import { KnowledgeBaseFacade } from './../../facades/knowledgeBase.facade';
import { KnowledgeArticle } from 'src/app/models/KnowledgeArticle';
import { SCROLLPERCENT } from 'src/app/shared/consts';

@Component({
  selector: 'app-kb-container',
  templateUrl: './kb-container.component.html',
  styleUrls: ['./kb-container.component.css']
})
export class KbContainerComponent implements OnInit, OnDestroy {
  searchedArticles$: Observable<KnowledgeArticle[]>;
  searchResultsCount$: Observable<number>;
  scrollPercent: number = SCROLLPERCENT;
  private scrollSub: Subject<string> = new Subject();

  constructor(private facade: KnowledgeBaseFacade) {
    this.searchedArticles$ = facade.searchArticles$;
    this.searchResultsCount$ = facade.searchResultCount$;
  }

  ngOnInit() {
    // throttling fast scroll input
    this.scrollSub.pipe(
      // throttleTime(300 /* ms */)
      // refer https://medium.com/@jvdheijden/rxjs-throttletime-debouncetime-and-audittime-explained-in-examples-c393178458f3
      debounceTime(300),
      // auditTime(300)
    ).subscribe(_ => {
      this.facade.loadNextPage();
    });
  }

  ngOnDestroy() {
    this.scrollSub.unsubscribe();
  }

  onSearch(searchTerm: string) {
    // call facdes to trigger search action
    this.facade.search(searchTerm);
  }

  loadNextPage() {
    // this.facade.loadNextPage();
    this.scrollSub.next();
  }

  scrollHandler(ev) {

  }
}
