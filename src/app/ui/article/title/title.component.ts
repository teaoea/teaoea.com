import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'to-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  value: string = '';

  @Output() title: EventEmitter<string> = new EventEmitter();

  newTitle(value: string) {
    this.title.emit(value);
  }

  formControl = new FormControl('', [
    Validators.required, Validators.minLength(10), Validators.maxLength(90)
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return $localize`:@@5461254227938381642:You must enter a value`;
    } else if (this.formControl.hasError('minLength')) {
      return $localize`:@@5703778869662923789:The title must be at least 10 characters`
    } else if (this.formControl.hasError('maxLength')) {
      return $localize`:@@3564951754754817328:The title up to 90 characters`
    }
  }
}
