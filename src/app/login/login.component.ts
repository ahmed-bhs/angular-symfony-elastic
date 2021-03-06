import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {Router} from '@angular/router';
import {PreviousRouteService} from '../core/services/previous-route.service';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private previousRouteService: PreviousRouteService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private cookieService: CookieService
  ) {
    toastr.toastrConfig.preventDuplicates = true;
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          'email': ['', Validators.email],
          'password': ['', Validators.required]
      });
  }

  loginUser() {
    const credentials = this.loginForm.value;
    return this.auth.loginUser(credentials)
      .subscribe(
        res => {
          if (res.token) {
            this.toastr.success('l\'authentification a réussi');
            this.cookieService.set('token', res.token);
            this.router.navigate([this.previousRouteService.getPreviousUrl()]);
          }
        },
        err => this.toastr.error(err)
      );
  }

  get password() {
    return this.loginForm.get('password');
  }

  get email() {
    return this.loginForm.get('email');
  }
}
