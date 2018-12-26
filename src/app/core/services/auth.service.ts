import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = `${environment.apiUrl}` + '/register';
  private _loginUrl = `${environment.apiUrl}` + '/login_check';

  constructor(private http: HttpClient,
              private router: Router,
              private cookieService: CookieService
  ) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
   return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    return !!this.cookieService.get('token');
  }

  getToken() {
    return this.cookieService.get('token');
  }

  logout() {
      this.cookieService.delete('token');
    this.router.navigate(['login']);
  }
}
