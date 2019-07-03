import { Component, OnInit, Input } from '@angular/core';
import { KnowledgeArticle } from 'src/app/models/KnowledgeArticle';
import { SCROLLPERCENT } from 'src/app/shared/consts';


@Component({
  selector: 'app-kb-list',
  templateUrl: './kb-list.component.html',
  styleUrls: ['./kb-list.component.css']
})
export class KbListComponent implements OnInit {
  @Input() kbArticleCollection: KnowledgeArticle[];

  constructor() { }

  ngOnInit() {
  }
}
