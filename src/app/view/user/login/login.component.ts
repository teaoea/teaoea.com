import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoginService } from '../../../service/user/login/login.service';
import { Login } from '../../../service/user/login/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private title: Title, private service: LoginService) {}

  ngOnInit(): void {
    this.title.setTitle('Login - teaoea');
  }

  login: Login = {
    email: '',
    password: '',
  };

  email(value: string) {
    this.login.email = value;
  }

  password(value: string) {
    this.login.password = value;
  }

  onSubmit() {
    this.service.post(this.login);
  }
}
