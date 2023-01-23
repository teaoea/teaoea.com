import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
})
export class PasswordComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  value: string = '';
  @Output() password: EventEmitter<string> = new EventEmitter();

  newPassword(value: string) {
    this.password.emit(value);
  }

  formControl = new FormControl(this.value, [Validators.required]);
}
