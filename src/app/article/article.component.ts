import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/internal/operators';
import {Article} from './article.model';
import {ItemResponse} from './item-response.model';
import {ArticleService} from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public limit = 5;
  public page = 1;
  public total: number;
  public previousPage: number;
  readonly imagePath = `${environment.apiUrl}` + '/..';

  public observable$: Observable<Article[]>;
  public articles: Article[];

  constructor(
    private http: HttpClient,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadPage(page: number) {
    if (page !== this.previousPage) {
      this.previousPage = page;
      this.loadData();
    }
  }

  loadData() {
    this.observable$ = this.articleService.getArticles(
      new HttpParams()
        .set('page', this.page.toString())
        .set('per_page', this.limit.toString())
    ).pipe(map((res: ItemResponse) => {
      this.page = res.page;
      this.total = res.total;
      this.limit = res.limit;
      return res._embedded.items;
    }));
    this.observable$.subscribe((res: Article[]) => this.articles = res);
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }

  createRange(len = 6) {
    const arr = [];
    for (let i = 0; i < len; i++) {
      arr.push(i);
    }
    return arr;
  }
}
