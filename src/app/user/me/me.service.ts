import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { authOptions, urls } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(
    private http: HttpClient
  ) {
  }

  get(): Observable<HttpResponse<any>> {
    return this.http.get(urls.user.me, authOptions);
  }
}
