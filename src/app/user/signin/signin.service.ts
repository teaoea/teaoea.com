import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Signin } from './signin';
import { options, urls } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  post(signin: Signin) {
    return this.http.post<any>(urls.user.signin, signin, options).subscribe(
      (response) => {
        localStorage.setItem('Authorization', response.body?.message);
        this.router.navigate(['/'], {relativeTo: this.route}).then();
      },
      (error) => {
        if (error.status === 404) {
          this.snackBar.open('mistake username');
          return;
        } else if (error.status === 403) {
          this.snackBar.open('mistake password');
          return;
        }
      }
    );
  }
}
