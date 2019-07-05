import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { KnowledgeArticle } from 'src/app/models/KnowledgeArticle';


@Component({
  selector: 'app-kb-list',
  templateUrl: './kb-list.component.html',
  styleUrls: ['./kb-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KbListComponent implements OnInit {
  @Input() kbArticleCollection: KnowledgeArticle[];

  constructor() { }

  ngOnInit() {
  }

  // See this performance tricky from:  https://netbasal.com/angular-2-improve-performance-with-trackby-cc147b5104e5
  trackByFn(index: number, item: KnowledgeArticle) {
    return item.id; // unique id corresponding to the item
 }
}
