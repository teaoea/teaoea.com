import { HttpHeaders } from '@angular/common/http';
import config from '../config.json';

/**
 * request headers
 * Don't carry 'Authorization' header
 */
export const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  observe: 'response' as 'response'
};

const authorization: any = localStorage.getItem('Authorization');

/**
 * request headers
 * carry 'Authorization' header
 */
export const authOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': authorization
  }),
  observe: 'response' as 'response'
};

export const urls = {
  user: {
    signup: `${config.baseURL}${config.urls.user.signup}`,
    signin: `${config.baseURL}${config.urls.user.signin}`,
    me: `${config.baseURL}${config.urls.user.me}`
  },
  angular: {
    signin_guard: `${config.baseURL}${config.urls.angular.signin_guard}`
  }
};
