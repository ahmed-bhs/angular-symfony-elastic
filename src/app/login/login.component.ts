import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {PreviousRouteService} from './services/previous-route.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private previousRouteService: PreviousRouteService) { }

  loginUserData = {};

  ngOnInit() {
    console.log(this.previousRouteService.getPreviousUrl());
  }

  loginUser() {
    return this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          if (res.token) {
            localStorage.setItem('token', res.token);
            this.router.navigate([this.previousRouteService.getPreviousUrl()]);
          }
        },
        err => console.log(err)
      )
      ;
  }
}
