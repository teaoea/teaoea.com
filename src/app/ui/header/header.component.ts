import { Component, OnInit, TemplateRef } from '@angular/core';
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
  }

  show: boolean = true;

  avatar: string = '';

  Authorization: TemplateRef<any> | null = null;

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
        this.avatar = `${config.avatar}${response.body?.avatar}`;
        this.show = false;
      }
    );
  }
}
