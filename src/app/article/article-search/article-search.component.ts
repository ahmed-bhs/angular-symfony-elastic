import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {environment} from '../../../environments/environment';
import {ArticleService} from '../../core/services/article.service';

@Component({
  selector: 'app-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css']
})
export class ArticleSearchComponent implements OnInit {
  @Output() eventEmitterSearch = new EventEmitter<string>();
  @Output() eventEmitterReset = new EventEmitter();

  public searchForm: FormGroup;
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.searchForm = new FormGroup({
        queryField: new FormControl(),
        sort: new FormControl()
    });
  }

  search() {
  const $formValue = this.searchForm.value;
      this.eventEmitterSearch.emit($formValue);
  }

  reset() {
      this.eventEmitterReset.emit();
  }
}
