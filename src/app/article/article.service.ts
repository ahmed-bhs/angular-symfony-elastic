import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _articlesUrl = `${environment.apiUrl}` + '/articles';
  constructor(private http: HttpClient) { }

  getArticles(params?: HttpParams): Observable<any> {
    return this.http.get(this._articlesUrl, {
      params: params
    });
  }
}
