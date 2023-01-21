import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Login} from "./login";
import url from "../../urls.json";
import {options} from "../../http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
  }

  post(login: Login) {
    return this.http
      .post<any>(`${url.baseUrl}${url.user.signup}`, login, options)
      .subscribe({
        next: (response) => {
          localStorage.setItem("Authorization", response.body.message);
          this.router.navigate(["/"], {relativeTo: this.route}).then();
        },
        error: (err) => {
          switch (err.status) {
            case 461 && 462:
              this.snackBar.open('Wrong email address',
                '', {
                  panelClass: 'snackBar'
                })
              break
            case 463:
              this.snackBar.open('Wrong password',
                '', {
                  panelClass: 'snackBar'
                })
              break
            default:
              this.router.navigate(["account/login"], {skipLocationChange: true}).then();
          }
        }
      })
  }
}
