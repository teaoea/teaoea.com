import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import url from '../../urls.json';
import { authOptions } from '../../http';

@Injectable({
  providedIn: 'root',
})
export class MeService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<any>(`${url.baseUrl}${url.user.me}`, authOptions);
  }
}
