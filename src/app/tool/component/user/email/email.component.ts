import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-email",
  templateUrl: "./email.component.html",
  styleUrls: ["./email.component.scss"],
})
export class EmailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  lable = "邮箱";

  value: string = "";

  @Output() email: EventEmitter<string> = new EventEmitter();

  newEmail(value: string) {
    this.email.emit(value);
  }

  formControl = new FormControl(this.value, [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(50),
  ]);
}
