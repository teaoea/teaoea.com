import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { forbiddenEmailSuffixes } from '../../../tools/directives/validators';

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
    Validators.required, Validators.email, forbiddenEmailSuffixes
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return $localize`:@@5461254227938381642:You must enter a value`;
    } else if (this.formControl.hasError('email')) {
      return $localize`:@@3832423045655225742:Invalid email address`;
    } else if (this.formControl.hasError('suffix')) {
      return $localize`:@@6791498164802383421:The email address suffix can't be used for signed up`;
    }
  }
}
