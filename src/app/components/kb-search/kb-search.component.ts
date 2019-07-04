import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-kb-search',
  templateUrl: './kb-search.component.html',
  styleUrls: ['./kb-search.component.css']
})
export class KbSearchComponent implements OnInit, OnDestroy {
  // @Input() searchTerm: string;

  @Input() kbArticleSearchResultCount: number;
  @Output() search = new EventEmitter<string>();
  private searchTermChangedSub: Subject<string> = new Subject();

  constructor() {
  }

  ngOnInit() {
    // throttling search input
    this.searchTermChangedSub.pipe(
      debounceTime(300)
    ).subscribe(searchTerm => {
      // let smart components to handle it
      if (searchTerm && searchTerm.length > 0) {
        this.search.emit(searchTerm);
      }
    });
  }

  ngOnDestroy() {
    this.searchTermChangedSub.unsubscribe();
  }

  searchKB(searchString) {
    this.searchTermChangedSub.next(searchString);
  }
}
