import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  show: boolean = true;

  Authorization: TemplateRef<any> | null = null;

  authorization(): boolean {
    return true;
  }

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
}
