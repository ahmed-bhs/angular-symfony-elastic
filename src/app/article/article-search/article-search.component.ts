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
  readonly baseUrl = `${environment.baseUrl}`;

  res: any;

  public searchForm: FormGroup;
  constructor(private articleService: ArticleService) {
  }


  ngOnInit() {
    // this.queryField.valueChanges.pipe(
    //   filter(string => string.length > 0),
    //   debounceTime(200),
    //   switchMap(queryField =>
    //     this._searchService.search(queryField)
    //   )).subscribe((res: ItemResponse) => this.results = res._embedded.articles);

      this.searchForm = new FormGroup({
          queryField: new FormControl()
      });this.searchForm.setValue({queryField: ''});
  }

    @Output() eventEmitterSearch = new EventEmitter<string>();
    @Output() eventEmitterReset = new EventEmitter();

    search() {
    const $searchQuery = this.searchForm.value.queryField;
        this.eventEmitterSearch.emit($searchQuery);
    }

    reset() {
        this.eventEmitterReset.emit();
    }
}
