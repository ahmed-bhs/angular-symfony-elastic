import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  itemsPerPage: any;
  totalItems: any;
  page: any;
  previousPage: any;

  public observable$: Observable<any>;
  private _articlesUrl = `${environment.apiUrl}` + '/articles';
  public articles: any;
  readonly imagePath = `${environment.apiUrl}` + '/..';

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.observable$ = this.http.get(this._articlesUrl).pipe(map((res: Response) => {

      this.page = res['page'];
      this.totalItems = res['total'];
      this.itemsPerPage = res['limit'];
      return res['_embedded']['items'];
    }));
    this.observable$.subscribe(
      (res) => this.articles = res
    );
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
     this.http.get(this._articlesUrl, {
      params: new HttpParams()
        .set('page', this.page)
        .set('per_page', this.itemsPerPage)
    }).pipe(map((res) => res['_embedded']['items'])).subscribe(
       (res: any[]) => this.articles = res
    );
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }

  createRange(len= 20) {
    const arr = [];
    for (let i = 0; i < len ; i++) {
      arr.push(i);
    }
    return arr;
  }
}
