import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import config from '../../config.json';

/**
 * @description check whether the email suffix can be used for sign up
 * @param email email address
 * @returns true pass,false not pass
 */
export function Suffixes(email: string): boolean {
  const suffix = '@' + email.split('@')[1];
  const suffixes = config.suffixes;
  const index = suffixes.indexOf(suffix);
  return index != -1;
}

export function EmailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const email = control.value;
    if (Suffixes(email)) {
      return null;
    }
    return new Error('Invalid email suffix');
  };
}
