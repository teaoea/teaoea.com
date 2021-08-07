import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { options, urls } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(
    private http: HttpClient
  ) {
  }

  post(key: string, value: string) {
    return this.http.post<any>(urls.user.query, {key, value}, options);
  }
}
