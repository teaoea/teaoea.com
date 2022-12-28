import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SendMailService } from 'src/app/tool/service/send-mail/send-mail.service';
import { SignupService } from './signup.service';
import { Signup } from "./signup";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private service: SignupService,
    private sendMailService: SendMailService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('注册 - teaoea')
  }

  signup: Signup = {
    username: '',
    email: '',
    code: ''
  }

  username(value: string) {
    this.signup.username = value
  }

  email(value: string) {
    this.signup.email = value
  }

  code(value: string) {
    this.signup.code = value
  }

  send() {
    this.sendMailService.post(this.signup.email, 'zh_HANS')
  }

  onSubmit() {
    this.service.post(this.signup)
  }
}
