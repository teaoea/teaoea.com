import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CustomValidator } from '../../../tools/directives/custom-validator';

@Component({
  selector: 'email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor(
    private cv:CustomValidator
  ) {
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
      return $localize`:@@5461254227938381642:You must enter a value`;
    } else if (this.formControl.hasError('email')) {
      return $localize`:@@3832423045655225742:Invalid email address`;
    } else if (!this.cv.suffixes(this.value)) {
      return $localize`:@@6791498164802383421:The email address suffix can't be used for signed up`;
    }
  }
}
