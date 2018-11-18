import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private auth: AuthService) { }

  intercept(req, next) {

    const token = this.auth.getToken();
    if (token) {
      const tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });

      return next.handle(tokenizedReq);
    }

    return next.handle(req);
  }
}
