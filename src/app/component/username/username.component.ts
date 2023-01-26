import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UsernameIsExistValidators } from './validators';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {
  value: string = '';
  @Output() username: EventEmitter<string> = new EventEmitter();

  constructor(private usernameIsExistValidators: UsernameIsExistValidators) {}

  formControl = new FormControl(this.value, {
    validators: [Validators.required],
    asyncValidators: [
      this.usernameIsExistValidators.validate.bind(
        this.usernameIsExistValidators,
      ),
    ],
    updateOn: 'blur',
  });

  ngOnInit(): void {}

  newUsername(value: string) {
    this.username.emit(value);
  }

  errorMessage() {
    if (this.formControl.hasError('required')) {
      return 'Username is required';
    }
    if (this.formControl.hasError('is_exist')) {
      return 'The username is already signup';
    }
    return null;
  }
}
