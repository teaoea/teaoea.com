import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";
import { Signup } from "./signup";
import { options } from "../../tool/http/http";
import url from "../../tool/http/urls.json"

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
  }

  /**
   *
   * @param signup
   * @returns
   */
  post(signup: Signup) {
    return this.http.post<any>(`${url.baseUrl}${url.user.signup}`, signup, options).subscribe({
      next: (response) => {
        localStorage.setItem('Authorization', response.body.message);
        this.router.navigate(['/'], { relativeTo: this.route }).then()
      },
      error: (error) => {
        switch (error.status) {
          case 462:
            this.snackBar.open('用户名已被注册')
            break
          case 463:
            this.snackBar.open('用户名只支持字母,谨防信息泄露,不要使用真名')
            break
          case 464:
            this.snackBar.open('邮箱已被注册')
            break
          case 465:
            this.snackBar.open('当前邮箱地址不支持注册')
            break
          case 466:
            this.snackBar.open('验证码错误')
            break
          default:
            this.snackBar.open('注册失败,请联系管理员')
        }
      }
    })
  }
}
