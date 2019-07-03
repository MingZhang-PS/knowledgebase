
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KnowledgeArticle } from './../models/KnowledgeArticle';
import { ResponseWrapper } from './responseWrapper';

@Injectable()
export class KnowlegdeBaseArticleService {
  private readonly API_PATH = './data';
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) { }

  searchKnowledgeArticle(searchTerm: string, pageNum: number, pageSize: number): Observable<ResponseWrapper<KnowledgeArticle>> {
    return this.http
      .get<ResponseWrapper<KnowledgeArticle>>(
        `${this.API_PATH}?q=${searchTerm}&_page=${pageNum}&_limit=${pageSize}`,
        {headers: this.headers});
  }
}
