import { AbstractControl, ValidationErrors } from '@angular/forms';
import config from '../../../config.json';

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
