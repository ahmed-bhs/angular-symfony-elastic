import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Article} from './model/article.model';
import {ItemResponse} from './model/item-response.model';
import {ArticleService} from '../core/services/article.service';
import {createHttpParams} from '../core/utils/http-params';
import * as _ from 'underscore';
import {Filter} from './model/filter.model';
import {Aggregations} from './model/aggregations.model';
import 'rxjs/add/operator/takeUntil';
import {getArticles} from './articles.reducer';
import {Subject} from 'rxjs';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {
    // Image Base URL
    readonly baseUrl = `${environment.baseUrl}`;
    // PAGINATION
    public limit = 6;
    public page = 1;
    public total: number;
    public previousPage: number;

    // HTTP PARAMS
    private query: string;
    private sort = 'score';
    private categoryId: number;
    private suppliersIds: number[];
    private priceLte: number;
    private priceGte: number;
    // RESPONSE ELEMENTS
    public aggregations: Aggregations;
    public articles: Article[];
    private res: ItemResponse;

    currentFilters: Filter[] = [];
    httpParams: HttpParams;

    // DESTROY SUBSCRIPTION
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private http: HttpClient,
        private articleService: ArticleService
    ) { }

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

        this.httpParams = createHttpParams(
          _.extend({
                'page': this.page,
                'per_page': this.limit,
                'query': this.query,
                'sort': this.sort,
                'category': this.categoryId,
                'suppliers[]': this.suppliersIds,
                'priceGte': this.priceGte,
                'priceLte': this.priceLte
            }, params)
        );

        this.articleService.getArticles(
            this.httpParams
        ).takeUntil(this.destroy$).subscribe((res: ItemResponse) => {
            if (res) {
                this.page = res.page;
                this.total = res.total;
                this.limit = res.limit;
                this.aggregations = res._embedded.aggregations;
                this.articles = res._embedded.articles;
            }
        });
    }

    receiveCategoryFilter($category: Filter) {
        this.categoryId = $category.id;
        this.loadData({
            'category': $category.id,
        });
    }

    receiveSupplierFilter($suppliers: Filter[]) {
        this.currentFilters = $suppliers;
        const ids = [];
        $suppliers.forEach(supplier => {
            ids.push(supplier.id);
        });

        this.suppliersIds = ids;
        this.loadData({
            'suppliers[]': this.suppliersIds,
        });
    }

    receiveSearchQuery($query: any) {
        this.query = $query.queryField;
        this.sort = $query.sort;
        this.loadData({
            'query': this.query,
            'sort': this.sort
        });
    }

    receivePriceFilter($event) {
      this.priceLte = $event.priceLte;
      this.priceGte = $event.priceGte;
      this.loadData({
        'priceGte': this.priceLte,
        'priceLte': this.priceGte
        });
    }

    resetSearchQuery() {
        this.query = '';
        this.categoryId = null;
        this.suppliersIds = [];
        this.loadData();
    }

    unfilter = ($filter: Filter) => {
        this.currentFilters = this.currentFilters.filter(e => e.id !== $filter.id);
        this.suppliersIds = this.suppliersIds.filter(id => id !== $filter.id);
        // Set values for this.categoryId and this.suppliers and then call loadData()
        this.loadData();
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        // Now let's also unsubscribe from the subject itself:
        this.destroy$.unsubscribe();
    }
}
