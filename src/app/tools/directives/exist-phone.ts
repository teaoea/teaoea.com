import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { QueryService } from './query.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ExistPhone implements AsyncValidator {
  constructor(
    private service: QueryService
  ) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.service.query('number', control.value).pipe(
      map(isExist => (
        isExist.body?.message == true ? {'exist': true} : null
      )),
      catchError(() => of(null))
    );
  }
}
