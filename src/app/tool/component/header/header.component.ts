import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.auth()
  }

  username: string = ''
  show: boolean = false

  auth() {
    return this.authService.authorization().subscribe({
      next: (response) => {
        this.username = response.body.message;
        this.show = true;
      }
    })
  }

  home() {
    return this.router.navigate(['/'], {relativeTo: this.route}).then();
  }

  login() {
    return this.router.navigate(['/account/login'], {relativeTo: this.route}).then();
  }

  signup() {
    return this.router.navigate(['/account/signup'], {relativeTo: this.route}).then();
  }

  me() {
    return this.router.navigate(['/account/me'], {relativeTo: this.route}).then();
  }
}
