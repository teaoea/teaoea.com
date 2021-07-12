import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

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

  formControl = new FormControl('', [
    Validators.required, Validators.pattern(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^a-zA-Z0-9]).{8,32}/),
    Validators.minLength(8), Validators.maxLength(32)
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (this.formControl.hasError('pattern')) {
      return 'The password isn\'t secure enough';
    } else if (this.formControl.hasError('minLength')) {
      return 'At least 8 characters';
    } else if (this.formControl.hasError('maxLength')) {
      return 'Up to 32 characters';
    }
  }
}
