import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Signup } from './signup';
import { options } from '../../http';
import url from '../../urls.json';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
  ) {}

  post(signup: Signup) {
    return this.http
      .post<any>(`${url.baseUrl}${url.user.signup}`, signup, options)
      .subscribe({
        next: (response) => {
          localStorage.setItem('Authorization', response.body.message);
          this.snackBar.open(
            'Account sign up is complete, and will return to the homepage soon',
            '',
            {
              panelClass: 'snackBar',
            },
          );
          this.router.navigate(['/'], { relativeTo: this.route }).then();
        },
        error: (error) => {
          switch (error.status) {
            case 460:
              this.snackBar.open('The two entered passwords do not match', '', {
                panelClass: 'snackBar',
              });
              break;
            case 461:
              this.snackBar.open(
                'The password is not secure enough, please use a more secure password',
                '',
                {
                  panelClass: 'snackBar',
                },
              );
              break;
            case 462:
              this.snackBar.open('Username already taken', '', {
                panelClass: 'snackBar',
              });
              break;
            case 463:
              this.snackBar.open(
                'The username only supports letters, beware of information leakage, do not use real names',
                '',
                {
                  panelClass: 'snackBar',
                },
              );
              break;
            case 464:
              this.snackBar.open('Email address already taken', '', {
                panelClass: 'snackBar',
              });
              break;
            case 465:
              this.snackBar.open(
                'The current email address does not support sign up',
                '',
                {
                  panelClass: 'snackBar',
                },
              );
              break;
            default:
              this.snackBar.open(
                'Sign up failed, please contact the administrator',
                '',
                {
                  panelClass: 'snackBar',
                },
              );
          }
        },
      });
  }
}
