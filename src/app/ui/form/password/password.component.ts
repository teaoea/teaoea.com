import { Component, EventEmitter, OnInit, Output } from '@angular/core';

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
}
