import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../tools/guard/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {
  }

  ngOnInit(): void {
    this.isSignin();
  }

  show: boolean = true;

  isSignin() {
    this.auth.get().subscribe(
      () => {
        this.show = false;
      }
    );
  }

  home() {
    return this.router.navigate(['/'], {relativeTo: this.route}).then();
  }

  notes() {
    return this.router.navigate(['/note'], {relativeTo: this.route}).then();
  }

  community() {
    return this.router.navigate(['/community'], {relativeTo: this.route}).then();
  }

  learn() {
    return this.router.navigate(['/learn'], {relativeTo: this.route}).then();
  }

  signin() {
    return this.router.navigate(['/account/signin'], {relativeTo: this.route}).then();
  }

  signup() {
    return this.router.navigate(['/account/signup'], {relativeTo: this.route}).then();
  }

  me() {
    return this.router.navigate(['/account/me'], {relativeTo: this.route}).then();
  }
}
