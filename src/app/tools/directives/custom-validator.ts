import { AbstractControl, ValidationErrors } from '@angular/forms';
import config from '../../../config.json';
import { QueryService } from './query.service';

export class CustomValidator {

  /**
   * @description check whether the email suffix can be used for sign up
   * @param email email address
   * @returns true pass,false not pass
   */
  private static suffixes(email: string): boolean {
    const suffix = '@' + email.split('@')[1];
    const suffixes = config.suffixes;
    const index = suffixes.indexOf(suffix);
    return index != -1;
  }

  private static service: QueryService;
  private static IsExist: boolean = false;

  private static query(key: string, value: string) {
    return this.service.post(key, value).subscribe(
      (response) => {
        this.IsExist = response.body?.message == true;
      }
    );
  }

  static forbiddenEmailSuffixes(control: AbstractControl): ValidationErrors | null {
    if (!this.suffixes(control.value)) {
      return {'suffixes': true};
    }
    return null;
  }

  static existUsername(control: AbstractControl): ValidationErrors | null {
    this.query('username', control.value);
    if (this.IsExist) {
      return {'exist': true};
    }
    return null;
  }
}
