import { Component, OnInit } from '@angular/core';
import { SigninService } from './signin.service';
import { Signin } from './signin';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private service: SigninService
  ) {
  }

  ngOnInit(): void {
  }

  signin: Signin = {
    username: '',
    password: ''
  };

  username(value: string) {
    this.signin.username = value;
  }

  password(value: string) {
    this.signin.password = value;
  }

  onSubmit() {
    return this.service.post(this.signin);
  }

}
