import { Component, OnInit } from '@angular/core';
import {AuthService} from './services/auth.service';
import {Router} from '@angular/router';
import {PreviousRouteService} from './services/previous-route.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private previousRouteService: PreviousRouteService, private toastr: ToastrService) {
    toastr.toastrConfig.preventDuplicates = true;
  }

  loginUserData = {};

  ngOnInit() {
     }

  loginUser() {
    return this.auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          if (res.token) {
            this.toastr.success('l\'authentification a réussi');
            localStorage.setItem('token', res.token);
            this.router.navigate([this.previousRouteService.getPreviousUrl()]);
          }
        },
        err => this.toastr.error( err)
      )
      ;
  }
}
