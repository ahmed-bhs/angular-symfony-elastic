import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ItemResponse} from '../../article/model/item-response.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _articlesUrl = `${environment.apiUrl}` + '/articles';
  public bar:ItemResponse;
  private data = new BehaviorSubject<ItemResponse>( this.bar);
   currentMessage = this.data.asObservable();

    private params = new BehaviorSubject('');
    paramsMessage = this.params.asObservable();
  constructor(private http: HttpClient) { }

  getArticles(params?: HttpParams) {
    return this.http.get(this._articlesUrl, {
      params: params
    });
  }

  changeData(res: ItemResponse) {
    this.data.next(res);
  }

  bindParams(params) {
      this.params.next(params);
  }
}
