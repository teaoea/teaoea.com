import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserValidatorService } from '../../service/angular/user-validator/user-validator.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss'],
})
export class UsernameComponent implements OnInit {
  constructor(private userValidatorService: UserValidatorService) {}

  ngOnInit(): void {}

  value: string = '';

  @Output() username: EventEmitter<string> = new EventEmitter();

  newUsername(value: string) {
    this.username.emit(value);
  }

  formControl = new FormControl(this.value, [
    Validators.required,
    this.userInputValidator,
  ]);

  userInputValidator(formControl: FormControl): {
    [hasError: string]: boolean;
  } {
    this.userValidatorService
      .userInputValidator('username', formControl.value)
      .subscribe({
        next: () => {
          return { hasError: false };
        },
        error: () => {
          return { hasError: true };
        },
      });
    return { hasError: false };
  }
}
