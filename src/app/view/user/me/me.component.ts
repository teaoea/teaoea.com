import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Me } from 'src/app/service/user/me/me';
import { MeService } from 'src/app/service/user/me/me.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss'],
})
export class MeComponent implements OnInit {
  constructor(
    private service: MeService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.info;
  }

  me: Me = {
    id: 0,
    username: '',
    email: '',
    email_active: false,
    avatar: '',
    gender: '',
  };

  info() {
    this.service.get().subscribe({
      next: (response) => {
        this.me.id = response.body.id;
        this.me.username = response.body.username;
        this.me.email = response.body.email;
        this.me.email_active = response.body.email_active;
        this.me.avatar = response.body.avatar;
        this.me.gender = response.body.gender;
      },
      error: () => {
        this.router.navigate(['account/login'], { relativeTo: this.route });
      },
    });
  }
}
