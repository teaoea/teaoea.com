import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import config from '../../../config.json';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { options, urls } from '../../config';
import { catchError, map } from 'rxjs/operators';

function suffix(email: string): boolean {
  const suffix = '@' + email.split('@')[1];
  const suffixes = config.suffixes;
  const index = suffixes.indexOf(suffix);
  return index != -1;
}

export function forbiddenEmailSuffixes(control: AbstractControl): ValidationErrors | null {
  if (!suffix(control.value)) {
    return {'suffix': true};
  }
  return null;
}

@Injectable({providedIn: 'root'})
export class QueryService {
  constructor(
    private http: HttpClient
  ) {
  }

  query(key: string, value: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(urls.user.query, {key, value}, options);
  }
}

@Injectable({providedIn: 'root'})
export class ExistEmail implements AsyncValidator {
  constructor(
    private service: QueryService
  ) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.query('email', control.value).pipe(
      map(isExist => (
        isExist.body?.message == true ? {'exist': true} : null
      )),
      catchError(() => of(null))
    );
  }
}
