import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRouterModule } from "./router/router.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./view/user/signup/signup.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from "@angular/material/snack-bar";
import { HeaderComponent } from "./component/header/header.component";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from "./view/home/home.component";
import { FooterComponent } from "./component/footer/footer.component";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from "./view/user/login/login.component";
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from "@angular/material/core";
import { UsernameComponent } from './component/username/username.component';
import { EmailComponent } from './component/email/email.component';
import { PasswordComponent } from './component/password/password.component';
import { ConfirmPasswordComponent } from './component/confirm-password/confirm-password.component';
import { RichTextEditorComponent } from './component/rich-text-editor/rich-text-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    UsernameComponent,
    EmailComponent,
    PasswordComponent,
    ConfirmPasswordComponent,
    RichTextEditorComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 15000}},
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
