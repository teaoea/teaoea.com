import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { options, urls } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private http: HttpClient
  ) {
  }

  query(key: string, value: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(urls.user.query, {key, value}, options);
  }
}
