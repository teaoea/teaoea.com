import { Component, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SignupService } from "./signup.service";
import { Signup } from "./signup";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(private service: SignupService, private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle("注册 - teaoea");
  }

  signup: Signup = {
    username: "",
    email: "",
    password: "",
    password2: "",
  };
  usernameFormControl = new FormControl(this.signup.username, [
    Validators.required,
  ]);

  emailFormControl = new FormControl(this.signup.email, [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl(this.signup.password, [
    Validators.required,
  ]);

  password2FormControl = new FormControl(this.signup.password2, [
    Validators.required,
  ]);
  onSubmit() {
    this.service.post(this.signup);
  }
}
