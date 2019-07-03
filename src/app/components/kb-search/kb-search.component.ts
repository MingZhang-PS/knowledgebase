import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-kb-search',
  templateUrl: './kb-search.component.html',
  styleUrls: ['./kb-search.component.css']
})
export class KbSearchComponent implements OnInit {
  // @Input() searchTerm: string;

  @Input() kbArticleSearchResultCount: number;
  @Output() search = new EventEmitter<string>();
  private searchTermChanged: Subject<string> = new Subject();
  private onDestroy$: Subject<boolean> = new Subject();

  constructor() {
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
