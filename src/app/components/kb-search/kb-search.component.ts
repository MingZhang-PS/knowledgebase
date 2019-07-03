import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { getTotalObjectsCount } from 'src/app/selectors/knowledgeBaseArticle.selector';
import { KnowledgeBaseFacade } from 'src/app/facades/knowledgeBase.facade';

@Component({
  selector: 'app-kb-search',
  templateUrl: './kb-search.component.html',
  styleUrls: ['./kb-search.component.css']
})
export class KbSearchComponent implements OnInit {
  // @Input() searchTerm: string;
  @Output() search = new EventEmitter<string>();
  private searchTermChanged: Subject<string> = new Subject();
  private onDestroy$: Subject<boolean> = new Subject();
  private searchResultsCount$: Observable<number>;

  constructor(private facade: KnowledgeBaseFacade) {
    this.searchResultsCount$ = this.facade.searchResultCount$;
  }

  ngOnInit() {
    // throttling search input
    this.searchTermChanged.pipe(
      takeUntil(this.onDestroy$),
      debounceTime(300)
    ).subscribe(searchTerm => {
      // let smart components to handle it
      if (searchTerm && searchTerm.length > 0) {
        this.search.emit(searchTerm);
      }
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next(true);
  }

  searchKB(searchString) {
    this.searchTermChanged.next(searchString);
  }
}
