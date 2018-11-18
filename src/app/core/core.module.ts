import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TokenInterceptorService} from './interceptors/token-interceptor.service';
import {AuthService} from './services/auth.service';
import {ErrorInterceptorService} from './interceptors/error-interceptor.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthGuard} from './guard/auth.guard';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
  providers: [AuthService, AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
