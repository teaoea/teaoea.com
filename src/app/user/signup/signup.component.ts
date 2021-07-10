import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { countries, Signup } from './signup';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private service: SignupService,
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

  formGroup = new FormGroup({
    username: new FormControl(this.signup.username, Validators.compose([
      Validators.required, Validators.pattern(/^[a-zA-Z]/),
      Validators.minLength(5), Validators.maxLength(32)
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@!%*?&])[A-Za-z\d$@!%*?&]/),
      Validators.minLength(8), Validators.maxLength(32)
    ]))
  });

  show = true;

  countries = countries;

  onSubmit() {
    this.service.post(this.signup);
  }

  errorUsername(): any {

  }

  error(): any {

  }
}
