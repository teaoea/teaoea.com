import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  value: string = '';

  @Output() username: EventEmitter<string> = new EventEmitter();

  newUsername(value: string) {
    this.username.emit(value);
  }

  formControl = new FormControl(this.value, [
    Validators.required,
  ]);
}
