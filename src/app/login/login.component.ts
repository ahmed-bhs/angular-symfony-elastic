import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {Router} from '@angular/router';
import {PreviousRouteService} from '../core/services/previous-route.service';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  authForm: FormGroup;
  constructor(
    private auth: AuthService,
    private router: Router,
    private previousRouteService: PreviousRouteService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {
    toastr.toastrConfig.preventDuplicates = true;
  }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      'username': ['', Validators.email],
      'password': ['', Validators.required]
    });
  }

  loginUser() {
    const credentials = this.authForm.value;
    return this.auth.loginUser(credentials)
      .subscribe(
        res => {
          if (res.token) {
            this.toastr.success('l\'authentification a réussi');
            localStorage.setItem('token', res.token);
            this.router.navigate([this.previousRouteService.getPreviousUrl()]);
          }
        },
        err => this.toastr.error(err)
      )
      ;
  }
}
