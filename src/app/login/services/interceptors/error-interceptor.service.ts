import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AuthService} from '../auth.service';
import {catchError} from 'rxjs/internal/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {console.log(err);
      if (err.status === 401 || err.status === 403) {
        // auto logout if 401 response returned from api
        this.auth.logout();
        this.router.navigate(['login']);
      }
      const error = err.message || err.statusText;
      return throwError(error);
    }));
  }
}
