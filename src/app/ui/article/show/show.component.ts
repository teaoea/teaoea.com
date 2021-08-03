import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { show } from './show';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'to-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  s = show;

  value: string = '';

  @Output() show: EventEmitter<boolean> = new EventEmitter;

  newShow(value: string) {
    this.show.emit(Boolean(value));
  }

  formControl = new FormControl('', [
    Validators.required
  ]);

  errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return $localize`:@@2945974538621128369:Must choose a category`
    }
  }
}
