/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KnowlegdeBaseArticleService } from './knowlegdeBaseArticle.service';

describe('Service: KnowlegdeBaseArticle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnowlegdeBaseArticleService]
    });
  });

  it('should ...', inject([KnowlegdeBaseArticleService], (service: KnowlegdeBaseArticleService) => {
    expect(service).toBeTruthy();
  }));
});
