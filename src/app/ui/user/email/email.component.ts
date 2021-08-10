import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { forbiddenEmailSuffixes } from '../../../tools/directives/custom-validator';
import { ExistEmail } from '../../../tools/directives/exist-email';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(
    private ee: ExistEmail
  ) {
  }

  ngOnInit(): void {
  }

  value: string = '';

  @Output() email: EventEmitter<string> = new EventEmitter();

  newEmail(value: string) {
    this.email.emit(value);
  }

  formControl = new FormControl(
    this.value,
    [
      Validators.required, Validators.email, forbiddenEmailSuffixes
    ],
    [
      this.ee.validate.bind(this.ee)
    ]
  );

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return $localize`:@@5461254227938381642:You must enter a value`;
    } else if (this.formControl.hasError('email')) {
      return $localize`:@@3832423045655225742:Invalid email address`;
    } else if (this.formControl.hasError('suffix')) {
      return $localize`:@@6791498164802383421:The email address suffix can't be used for signed up`;
    } else if (this.formControl.hasError('exist')) {
      return $localize`:@@8871331676171095977:This email address is already used by someone else,please change the email address`;
    }
  }
}
