import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SignupService } from '../../../service/user/signup/signup.service';
import { Signup } from '../../../service/user/signup/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private service: SignupService, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Sign Up - teaoea');
  }

  signup: Signup = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  username(value: string) {
    this.signup.username = value;
  }

  email(value: string) {
    this.signup.email = value;
  }

  password(value: string) {
    this.signup.password = value;
  }

  confirm_password(value: string) {
    this.signup.password2 = value;
  }

  onSubmit() {
    this.service.post(this.signup);
  }
}
