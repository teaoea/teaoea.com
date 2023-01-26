import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { UserValidatorService } from '../../service/angular/user-validator/user-validator.service';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsernameIsExistValidators implements AsyncValidator {
  constructor(private service: UserValidatorService) {}

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.service.userInputValidator('username', control.value).pipe(
      map(() => ('' ? { 'is_exist': true } : null)),
      catchError(() => of(null)),
    );
  }
}
