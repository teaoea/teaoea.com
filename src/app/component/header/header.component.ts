import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/user/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user_id = Date.parse(String(new Date().getTime()));

  show: boolean = true;

  avatar_theme: string = 'avatar-dark.jpg';

  themeMode = window.matchMedia('(prefers-color-scheme: light)');

  constructor(private authService: AuthService) {
    authService.authorization().subscribe({
      next: (response) => {
        this.show = false;
        this.user_id = response.body.message;
      },
    });

    this.themeMode.addEventListener('change', (e) => {
      if (e.matches) {
        this.avatar_theme = 'avatar-light.jpg';
      }
    });
  }

  ngOnInit(): void {}
}
