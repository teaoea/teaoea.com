import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeService } from '../../user/me/me.service';
import config from '../../../config.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
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
    this.router.navigate(['/'], {relativeTo: this.route}).then();
  }

  notes() {
    this.router.navigate(['/article/note'], {relativeTo: this.route}).then();
  }

  community() {
    this.router.navigate(['/article/community'], {relativeTo: this.route}).then();
  }

  learn() {
    this.router.navigate(['/article/kind'], {relativeTo: this.route}).then();
  }

  signin() {
    this.router.navigate(['/account/signin'], {relativeTo: this.route}).then();
  }

  signup() {
    this.router.navigate(['/account/signup'], {relativeTo: this.route}).then();
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
