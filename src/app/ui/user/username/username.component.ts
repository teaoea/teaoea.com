import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ExistUsername } from '../../../tools/directives/exist-username';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor(
    private eu: ExistUsername
  ) {
  }

  ngOnInit(): void {
  }

  value: string = '';

  @Output() username: EventEmitter<string> = new EventEmitter();

  newUsername(value: string) {
    this.username.emit(value);
  }

  formControl = new FormControl(
    this.value,
    [
      Validators.required, Validators.pattern(/^[a-zA-Z@._-]{5,32}$/),
      Validators.minLength(5), Validators.maxLength(32)
    ],
    [
      this.eu.validate.bind(this.eu)]
  );

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return $localize`:@@5461254227938381642:You must enter a value`;
    } else if (this.formControl.hasError('pattern')) {
      return $localize`:@@6092892111398938486:Allow of letters,underscores and horizontal lines`;
    } else if (this.formControl.hasError('minLength')) {
      return $localize`:@@9189860139260910697:At least 5 characters`;
    } else if (this.formControl.hasError('maxLength')) {
      return $localize`:@@3653294539457872842:Up to 32 characters`;
    } else if (this.formControl.hasError('exist')) {
      $localize`:@@3527746094124917129:This username has been used by others, please change the username`;
    }
  }
}
