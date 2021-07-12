import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss']
})
export class ConfirmPasswordComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  show = true;

  value: string = '';

  @Output() password: EventEmitter<string> = new EventEmitter();

  newPassword(value: string) {
    this.password.emit(value);
  }

  value2: string = '';

  @Output() password2: EventEmitter<string> = new EventEmitter();

  newPassword2(value: string) {
    this.password2.emit(value);
  }

  formControl = new FormControl('', [
    Validators.required, Validators.minLength(8), Validators.maxLength(32)
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (this.formControl.hasError('minLength')) {
      return 'At least 8 characters';
    } else if (this.formControl.hasError('maxLength')) {
      return 'Up to 32 characters';
    }
  }

  formControl2 = new FormControl('', [
    Validators.required, Validators.minLength(8), Validators.maxLength(32)
  ]);

  errorMessage2(): any {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (this.formControl.hasError('minLength')) {
      return 'At least 8 characters';
    } else if (this.formControl.hasError('maxLength')) {
      return 'Up to 32 characters';
    } else if (this.value !== this.value2) {
      return 'Inconsistent passwords';
    }
  }

}
