import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  private _articlesUrl = 'http://127.0.0.1:8000/api/articles';
  private subscription: Subscription;
  private articles: Observable<any>;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.articles = this.http.get(this._articlesUrl);
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
