import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {ArticleComponent} from './article/article.component';
import {LoadingBarRouterModule} from '@ngx-loading-bar/router';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {CoreModule} from './core/core.module';
import {MasonryModule} from 'angular2-masonry';
import {NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import {FadeInOutDirectiveDirective} from './core/directives/fade-in-out-directive.directive';
import {ArticleSearchComponent} from './article/article-search/article-search.component';
import {JsonObject} from './article/json-object.pipe';
import {SearchPipe} from './article/search-pipe.model';
import {CategoryFilterComponent} from './article/category-filter/category-filter.component';
import { BrandFilterComponent } from './article/brand-filter/brand-filter.component';
import { SupplierFilterComponent } from './article/supplier-filter/supplier-filter.component';
import { FilterDisplayComponent } from './article/filter-display/filter-display.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ArticleComponent,
    FadeInOutDirectiveDirective,
    ArticleSearchComponent,
    JsonObject,
    SearchPipe,
    CategoryFilterComponent,
    BrandFilterComponent,
    SupplierFilterComponent,
    FilterDisplayComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule,
    // LoadingBarHttpClientModule,
    LoadingBarRouterModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MasonryModule,
    NgbModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
