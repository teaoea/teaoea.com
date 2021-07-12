import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { countries } from './country';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  countries = countries;

  value: string = '';

  @Output() country: EventEmitter<string> = new EventEmitter();

  newCountry(value: string) {
    this.country.emit(value);
  }

  value2: string = '';

  @Output() number: EventEmitter<string> = new EventEmitter();

  newNumber(value: string) {
    this.number.emit(value);
  }

  formControl = new FormControl('', [
    Validators.required, Validators.pattern(/^[0-9]$/)
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (this.formControl.hasError('pattern')) {
      return 'Can only be numbers';
    }
  }
}
