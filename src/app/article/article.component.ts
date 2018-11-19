import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  private _articlesUrl = 'http://127.0.0.1:8000/api/articles';
  public articles = <any>[];
  private subscription: Subscription;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.subscription = this.http.get(this._articlesUrl)
      .subscribe(
        res => this.articles = res,
        err => console.log(err)
      )
    ;
  }

  trackElement(index: number, element: any) {
    return element ? element.id : null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
