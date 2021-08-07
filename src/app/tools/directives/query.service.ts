import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { options, urls } from '../../config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private http: HttpClient
  ) {
  }

  post(key: string, value: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(urls.user.query, {key, value}, options);
  }
}
