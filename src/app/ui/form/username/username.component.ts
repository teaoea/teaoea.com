import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  formControl = new FormControl('', [
    Validators.required, Validators.pattern(/^[a-zA-Z]/),
    Validators.minLength(5), Validators.maxLength(32)
  ]);

  value: string = '';

  @Output() username: EventEmitter<string> = new EventEmitter();

  newUsername(value: string) {
    this.username.emit(value);
  }
}
