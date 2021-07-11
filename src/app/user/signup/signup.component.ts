import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { Signup } from './signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private service: SignupService
  ) {
  }

  ngOnInit(): void {
  }

  signup: Signup = {
    username: '',
    password: '',
    password2: '',
    email: '',
    country: '',
    number: ''
  };

  username(value: string) {
    this.signup.username = value;
  }

  password(value: string) {
    this.signup.password = value;
  }

  password2(value: string) {
    this.signup.password2 = value;
  }

  email(value: string) {
    this.signup.email = value;
  }

  country(value: string) {
    this.signup.country = value;
  }

  number(value: string) {
    this.signup.number = value;
  }

  onSubmit() {
    this.service.post(this.signup);
  }

}
