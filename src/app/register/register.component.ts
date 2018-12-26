import {Component, OnInit} from '@angular/core';
import {AuthService} from '../core/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

   registerForm: FormGroup;

    constructor(private auth: AuthService,
                private formBuilder: FormBuilder) {
  }
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          'email': ['', Validators.email],
          'password': ['', Validators.required]
      });
  }

  registerUser() {
    const credentials = this.registerForm.value;

    return this.auth.registerUser(credentials)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
      ;
  }

}
