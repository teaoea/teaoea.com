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
            this.snackBar.open($localize`:@@3819679798950937017:Mistake verification code`);
            break;
          case 461:
            this.snackBar.open($localize`:@@4450260585069973489:The password isn't secure enough`);
            break;
        }
      }
    );
  }
}
