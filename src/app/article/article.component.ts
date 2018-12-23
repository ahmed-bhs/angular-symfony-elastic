import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Article} from './article.model';
import {ItemResponse} from './item-response.model';
import {ArticleService} from '../core/services/article.service';
import {createHttpParams} from '../core/utils/http-params';
import {_} from 'underscore';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public limit = 6;
    public page = 1;
    public total: number;
    public query: string = '';
    public category: number;
    public previousPage: number;
    public loading = true;
    readonly baseUrl = `${environment.baseUrl}`;
    public aggregations: any;
    categoryFilters: string[] = [];
    public articles: Article[];
    private _destroyed$ = new Subject();
    private res: ItemResponse;
    filters: any[] = [];

    constructor(
        private http: HttpClient,
        private articleService: ArticleService,
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

    loadData(params?: any) {
        this.articleService.getArticles(
            createHttpParams(_.extend({
                'page': this.page,
                'per_page': this.limit,
                'query': this.query,
                'category': this.category
            }, params))
        ).subscribe((res: ItemResponse) => {
            if (res) {
                this.page = res.page;
                this.total = res.total;
                this.limit = res.limit;
                this.aggregations = res._embedded.aggregations;
                this.articles = res._embedded.articles;
            }

        });
    }

    trackElement(index: number, element: any) {
        return element ? element.id : null;
    }

    receiveCategoryFilter($category) {
        if(!_.contains(this.filters, $category.name)) {
            this.filters.push($category.name);
        }
        this.loadData({
            'category': $category.id,
        });
    }

    receiveSupplierFilter($suppliers) {
        this.loadData({
            'suppliers[]': $suppliers,
        });
    }

    receiveSearchQuery($query) {
        this.query = $query;
        this.loadData({
            'query': $query,
        });
    }

    resetSearchQuery() {
        this.query = '';
        this.category = null;
        this.loadData();
    }

    unfilter = (event) => {
        this.filters = _.without(this.filters, event.filter);
        this.resetSearchQuery();
    };

}
