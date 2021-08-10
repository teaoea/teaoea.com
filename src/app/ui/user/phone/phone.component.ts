import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { countries } from './country';
import { FormControl, Validators } from '@angular/forms';
import { ExistPhone } from '../../../tools/directives/exist-phone';

@Component({
  selector: 'phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  constructor(
    private ep: ExistPhone
  ) {
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

  formControl = new FormControl(
    this.value2,
    [
      Validators.required,
    ],
    [
      this.ep.validate.bind(this.ep)
    ]
  );

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return $localize`:@@5461254227938381642:You must enter a value`;
    } else if (this.formControl.hasError('pattern')) {
      return $localize`:@@4870141070283689400:The phone number can only be a number`;
    } else if (this.formControl.hasError('exist')) {
      return $localize`:@@6301702895671752959:This phone number is already used by someone else,please change the phone number`;
    }
  }
}
