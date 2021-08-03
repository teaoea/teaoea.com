import { Component, OnInit } from '@angular/core';
import { Me } from './me';
import { MeService } from './me.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  constructor(
    private title: Title,
    private service: MeService
  ) {
  }

  ngOnInit(): void {
    this.title.setTitle($localize`:@@4964247078132180679:Account settings - teaoea`);
  }

  me: Me = {
    username: '',
    email: '',
    email_active: false,
    number: '',
    number_active: false,
    avatar: '',
    gender: ''
  };

  onSubmit(): any {
    this.service.get().subscribe(
      (response) => {
        this.me.username = response.body?.username;
        this.me.email = response.body?.email;
        this.me.email_active = response.body?.email_active;
        this.me.number = response.body?.number;
        this.me.number_active = response.body?.number_active;
        this.me.avatar = response.body?.avatar;
        this.me.gender = response.body?.gender;
      }
    );
  }
}
