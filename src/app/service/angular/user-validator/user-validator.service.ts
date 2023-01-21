import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import url from "../../urls.json"
import { options } from "../../http";

@Injectable({
  providedIn: 'root'
})
export class UserValidatorService {

  constructor(
    private http: HttpClient
  ) {
  }

  userInputValidator(key: string, value: string): Observable<HttpResponse<any>> {
    return this.http
      .post<any>(`${url.baseUrl}${url.angular.user_validator}`, {key: key, value: value}, options)
  }
}
