import { AbstractControl, ValidationErrors } from '@angular/forms';
import config from '../../../config.json';

export class BaseValidator {


  constructor() {
  }

  /**
   * @description check whether the email suffix can be used for sign up
   * @param email email address
   * @returns true ok
   */
  static suffixes(email: string): boolean {
    const suffix = '@' + email.split('@')[1];
    const suffixes = config.suffixes;
    const index = suffixes.indexOf(suffix);
    return index != -1;
  }

}

export function forbiddenEmailSuffixes(control: AbstractControl): ValidationErrors | null {
  if (!BaseValidator.suffixes(control.value)) {
    return {'suffix': true};
  }
  return null;
}

