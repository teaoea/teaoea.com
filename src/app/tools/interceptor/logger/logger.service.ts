import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Logger } from './logger';
import { options, urls } from '../../../config';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor(
    private http: HttpClient
  ) {
  }

  post(logger: Logger) {
    return this.http.post<any>(urls.angular.logger, logger, options);
  }
}
