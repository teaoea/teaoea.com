import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import config from '../../../config.json';

export class CustomValidator {
  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * @description check whether the email suffix can be used for sign up
   * @param email email address
   * @returns true pass,false not pass
   */
  suffixes(email: string): boolean {
    const suffix = '@' + email.split('@')[1];
    const suffixes = config.suffixes;
    const index = suffixes.indexOf(suffix);
    return index != -1;
  }

  forbiddenEmailSuffixes(control: AbstractControl): ValidationErrors | null {
    return null;
  }
}
