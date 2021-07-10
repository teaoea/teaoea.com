import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { countries, Signup } from './signup';

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

  countries = countries;

  onSubmit() {
    this.service.post(this.signup);
  }

  errorMessage(): any {
  }
}
