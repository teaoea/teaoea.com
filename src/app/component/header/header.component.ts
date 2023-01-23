import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../service/user/auth/auth.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = ''
  show: boolean = true

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.auth()
  }

  auth() {
    return this.authService.authorization().subscribe({
      next: (response) => {
        this.username = response.body.message;
        this.show = false;
      }
    })
  }

  home() {
    return this.router.navigate(['/'], {relativeTo: this.route});
  }

  login() {
    return this.router.navigate(['/account/login'], {relativeTo: this.route}).then();
  }

  signup() {
    return this.router.navigate(['/account/signup'], {relativeTo: this.route}).then();
  }

  me() {
    return this.router.navigate(['/account/info'], {relativeTo: this.route}).then();
  }
}
