import { Component, OnInit, Input } from '@angular/core';

import { KnowledgeArticle } from './../../models/KnowledgeArticle';

@Component({
  selector: 'app-kb-item',
  templateUrl: './kb-item.component.html',
  styleUrls: ['./kb-item.component.css']
})
export class KbItemComponent implements OnInit {
  @Input() kbArticle: KnowledgeArticle;

  constructor() { }

  ngOnInit() {
  }

  forward() {
    console.log('forward');
  }

  copy() {
    console.log('copy to clipboard');
  }

  open() {
    console.log('open this article');
  }
}
