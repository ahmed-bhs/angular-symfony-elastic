import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService} from '../services/auth.service';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService,
              private cookieService: CookieService) { }

  intercept(req, next) {
    const token = this.auth.getToken();
    if (token) {
    this.cookieService.set('token', token);
      const tokenizedReq = req.clone({
          withCredentials: true
      });

      return next.handle(tokenizedReq);
    }

    return next.handle(req);
  }
}
