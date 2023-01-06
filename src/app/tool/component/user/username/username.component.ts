import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-username",
  templateUrl: "./username.component.html",
  styleUrls: ["./username.component.scss"],
})
export class UsernameComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lable = "用户名";

  value: string = "";

  @Output() username: EventEmitter<string> = new EventEmitter();

  newUsername(value: string) {
    this.username.emit(value);
  }

  formControl = new FormControl(this.value, [
    Validators.required,
    //Validators.pattern(/^[a-zA-Z@._-]$/),
    Validators.minLength(5),
    Validators.maxLength(32),
  ]);

  /**
   errorMessage(): any {
    if (this.formControl.hasError('required')) {
      return '请输入用户名'
    } else if (this.formControl.hasError('minLength')) {
      return '用户名不能少于5个字符';
    } else if (this.formControl.hasError('maxLength')) {
      return '用户名不能超过32个字符';
    }
  }
   */
}
