import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModifyPassword } from './modify-password';
import { MatSnackBar } from '@angular/material/snack-bar';
import { authOptions, urls } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class ModifyPasswordService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  post(modifyPassword: ModifyPassword) {
    return this.http.post<any>(urls.user.modify.password, modifyPassword, authOptions).subscribe(
      () => {
        this.router.parseUrl('/account/me');
      },
      (error) => {
        switch (error.status) {
          case 460:
            this.snackBar.open('Mistake verification code');
            break;
          case 461:
            this.snackBar.open('The password isn\'t secure enough');
            break;
        }
      }
    );
  }
}
