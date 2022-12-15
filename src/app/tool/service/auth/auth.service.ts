import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {authOptions} from "../../http/http";
import url from "../../http/urls.json"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  url: string = `${url.baseUrl}${url.user.auth}`

  authorization(): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.url, authOptions)
  }
}
