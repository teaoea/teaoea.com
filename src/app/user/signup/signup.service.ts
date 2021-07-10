import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Signup } from './signup';
import { options, urls } from '../../config';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  post(signup: Signup) {
    return this.http.post<any>(urls.user.signup, signup, options).subscribe(
      () => {
        this.router.navigate(['/'], {relativeTo: this.route}).then();
      },
      (error) => {
        switch (error.status) {
          case 460:
            this.snackBar.open('The two passwords entered are inconsistent');
            break;
          case 461:
            this.snackBar.open('The password needs to be greater than 8 digits and less than 32 digits');
            break;
          case 462:
            this.snackBar.open('Email address suffix cannot be used for registration');
            break;
          case 463:
            this.snackBar.open('Username has been signed up');
            break;
          case 464:
            this.snackBar.open('Username can only be English characters');
            break;
          case 465:
            this.snackBar.open('Email address has been signed up');
            break;
          case 466:
            this.snackBar.open('Phone number has been signed up');
            break;
          case 467:
            this.snackBar.open('The phone number can only be a number');
        }
      }
    );
  }
}
