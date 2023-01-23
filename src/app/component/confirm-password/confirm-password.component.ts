import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.scss'],
})
export class ConfirmPasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string = '';

  @Output() confirm_password: EventEmitter<string> = new EventEmitter();

  newConfirmPassword(value: string) {
    this.confirm_password.emit(value);
  }

  formControl = new FormControl(this.value, [Validators.required]);
}
