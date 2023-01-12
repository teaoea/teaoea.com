import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Signup } from "./signup";
import { options } from "../../tool/http/http";
import url from "../../tool/http/urls.json";

@Injectable({
  providedIn: "root",
})
export class SignupService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
  }

  post(signup: Signup) {
    return this.http
      .post<any>(`${url.baseUrl}${url.user.signup}`, signup, options)
      .subscribe({
        next: (response) => {
          localStorage.setItem("Authorization", response.body.message);
          this.router.navigate(["/"], {relativeTo: this.route}).then();
        },
        error: (error) => {
          switch (error.status) {
            case 460:
              this.snackBar.open("两次输入的密码不一致", "", {
                duration: 1500,
                panelClass: 'snackBar'
              });
              break;
            case 461:
              this.snackBar.open("密码不够安全,请使用更安全的密码", "", {
                duration: 1500,
                panelClass: 'snackBar'
              });
              break;
            case 462:
              this.snackBar.open("用户名已被注册", "", {
                duration: 1500,
                panelClass: 'snackBar'
              });
              break;
            case 463:
              this.snackBar.open("用户名只支持字母,谨防信息泄露,不要使用真名", "", {
                duration: 1500,
                panelClass: 'snackBar'
              });
              break;
            case 464:
              this.snackBar.open("邮箱已被注册", "", {
                duration: 1500,
                panelClass: 'snackBar'
              });
              break;
            case 465:
              this.snackBar.open("当前邮箱地址不支持注册", "", {
                duration: 1500,
                panelClass: 'snackBar'
              });
              break;
            default:
              this.snackBar.open("注册失败,请联系管理员", "", {
                panelClass: 'snackBar'
              });
          }
        },
      });
  }
}
