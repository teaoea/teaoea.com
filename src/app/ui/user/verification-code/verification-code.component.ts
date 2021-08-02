import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  value: string = '';

  @Output() verificationCode: EventEmitter<string> = new EventEmitter();

  newVerificationCode(value: string) {
    this.verificationCode.emit(value);
  }
}
