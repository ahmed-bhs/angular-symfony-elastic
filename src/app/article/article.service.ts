import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _articlesUrl = `${environment.apiUrl}` + '/articles';
  public aa = './assets/placeholder.gif';
  constructor(private http: HttpClient) { }

  getArticles(params?: HttpParams) {
    return this.http.get(this._articlesUrl, {
      params: params
    });
  }

}
