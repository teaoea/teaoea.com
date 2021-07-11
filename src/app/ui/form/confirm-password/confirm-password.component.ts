import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
    this.password2.emit(value)
  }
}
