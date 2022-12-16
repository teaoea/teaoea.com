import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import url from '../../http/urls.json'
import {options} from "../../http/http";
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  post(email: string, language: string, db_int: number) {
    return this.http.post<any>(`${url.baseUrl}${url.user.send_mail}`, {
      email: email,
      language: language,
      db_int: db_int
    }, options).subscribe({
      next: () => {
        return this.snackBar.open(`验证码已发送到${email}`)
      },
      error: (error) => {
        switch (error.status) {
          case 461:
            this.snackBar.open('已发送过验证码,无法继续发送')
            break
          case 462:
            this.snackBar.open('当前邮箱无法用于注册')
            break
          default:
            this.snackBar.open('验证码发送失败,请联系管理员处理')
        }
      }
    })
  }
}
