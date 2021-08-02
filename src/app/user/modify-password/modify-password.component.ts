import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ModifyPassword } from './modify-password';
import { ModifyPasswordService } from './modify-password.service';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrls: ['./modify-password.component.scss']
})
export class ModifyPasswordComponent implements OnInit {

  constructor(
    private title: Title,
    private service: ModifyPasswordService
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle('Modify password - teaoea');
  }

  modifyPassword: ModifyPassword = {
    code: '',
    password1: '',
    password2: ''
  };

  code(value: string) {
    this.modifyPassword.code = value;
  }

  password1(value: string) {
    this.modifyPassword.password1 = value;
  }

  password2(value: string) {
    this.modifyPassword.password2 = value;
  }

  onSubmit() {
    this.service.post(this.modifyPassword);

  }
}
