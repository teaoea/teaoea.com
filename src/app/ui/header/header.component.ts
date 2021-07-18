import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeService } from '../../user/me/me.service';
import config from '../../../config.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private meService: MeService
  ) {
  }

  ngOnInit(): void {
    this.me();
  }

  show: boolean = true;

  avatar: string = '';

  username: string = '';

  home() {
    this.router.parseUrl('/');
  }

  notes() {
    this.router.parseUrl('/note');
  }

  community() {
    this.router.parseUrl('/community');
  }

  learn() {
    this.router.parseUrl('kind');
  }

  signin() {
    this.router.parseUrl('/account/signin');
  }

  signup() {
    this.router.parseUrl('/account/signup');
  }

  me() {
    this.meService.get().subscribe(
      (response) => {
        this.show = false;
        if (response.body?.avatar === "") {
          this.avatar = "src/assets/user-solid.svg";
        } else {
          this.avatar = `${config.avatar}${response.body?.avatar}`;
        }
      },
    );
  }
}
