import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Suffixes } from './email';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  value: string = '';

  @Output() email: EventEmitter<string> = new EventEmitter();

  newEmail(value: string) {
    this.email.emit(value);
  }

  formControl = new FormControl('', [
    Validators.required, Validators.email
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (!(Suffixes(this.value))) {
      return 'Invalid email address suffix';
    }
  }
}
