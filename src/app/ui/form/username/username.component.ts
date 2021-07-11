import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  value: string = '';

  @Output() username: EventEmitter<string> = new EventEmitter();

  newUsername(value: string) {
    this.username.emit(value);
  }

  formControl = new FormControl('', [
    Validators.required, Validators.pattern(/^[a-zA-Z_-]{5,32}$/),
    Validators.minLength(5), Validators.maxLength(32)
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (this.formControl.hasError('pattern')) {
      return 'Allow of letters,underscores and horizontal lines';
    } else if (this.formControl.hasError('minLength')) {
      return 'At least 5 characters';
    } else if (this.formControl.hasError('maxLength')) {
      return 'Up to 32 characters';
    }
  }
}
