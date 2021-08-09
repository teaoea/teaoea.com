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
  ) {
  }

  post(signup: Signup) {
    return this.http.post<any>(urls.user.signup, signup, options).subscribe(
      () => {
        this.router.navigate(['/'], {relativeTo: this.route}).then();
      },
      (error) => {
        switch (error.status) {
          case 460:
            this.snackBar.open($localize`:@@5555496431958649129:The two passwords entered are inconsistent`);
            break;
          case 461:
            this.snackBar.open($localize`:@@7152614246608881220:
              The password needs to meet the following requirements:\n
            1. Need a capital letter\n
            2. Need a lowercase letter\n
            3. Need a number\n
            4. Need a special character,"!@#~$%^&*(\"\')+|_<>"`, 'Undo');
            break;
          case 462:
            this.snackBar.open($localize`:@@6791498164802383421:Email address suffix can't be used for signed up`);
            break;
          case 463:
            this.snackBar.open($localize`:@@3527746094124917129:This username is already used by someone else, please change the username`);
            break;
          case 464:
            this.snackBar.open($localize`:@@6092892111398938486:Allow of letters,underscores and horizontal lines`);
            break;
          case 465:
            this.snackBar.open($localize`:@@8871331676171095977:Email address is already used by someone else`);
            break;
          case 466:
            this.snackBar.open($localize`:@@6301702895671752959:Phone number is already used by someone else`);
            break;
          case 467:
            this.snackBar.open($localize`:@@4870141070283689400:The phone number can only be a number`);
        }
      }
    );
  }
}
