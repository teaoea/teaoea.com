import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/user/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username: string = '';
  show: boolean = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.authorization().subscribe({
      next: () => {
        this.show = false;
      },
    });
  }
}
