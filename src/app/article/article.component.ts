import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private _articlesUrl = 'http://127.0.0.1:8000/api/articles';
  public articles = <any>[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this._articlesUrl)
      .subscribe(
        res => this.articles = res,
        err => console.log(err)
      )
    ;
  }
}
