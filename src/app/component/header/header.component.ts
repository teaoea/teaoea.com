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

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authorization().subscribe({
      next: (response) => {
        this.show = false;
        this.user_id = response.body.message;
      },
    });
  }
}
