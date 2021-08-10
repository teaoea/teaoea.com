import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { QueryService } from './query.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ExistUsername implements AsyncValidator {
  constructor(
    private service: QueryService
  ) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.query('username', control.value).pipe(
      map(isExist => (
        isExist.body?.message == true ? {'exist': true} : null
      )),
      catchError(() => of(null))
    );
  }
}
