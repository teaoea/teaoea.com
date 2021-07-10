import { HttpHeaders } from '@angular/common/http';
import config from '../config.json';

/**
 * request headers
 */
export const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  observe: 'response' as 'response'
};

export const urls = {
  user: {
    signup: `${config.baseURL}${config.urls.user.signup}`
  }
};
