import {Component, OnInit} from '@angular/core';
import {AuthService} from '../login/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData = {};

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  registerUser() {

    return this.auth.registerUser(this.registerUserData)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
      ;
  }

}
