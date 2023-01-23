import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarModule,
} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ConfirmPasswordComponent } from './component/confirm-password/confirm-password.component';
import { EmailComponent } from './component/email/email.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { PasswordComponent } from './component/password/password.component';
import { RichTextEditorComponent } from './component/rich-text-editor/rich-text-editor.component';
import { UsernameComponent } from './component/username/username.component';
import { AppRouterModule } from './router/router.module';
import { HomeComponent } from './view/home/home.component';
import { LoginComponent } from './view/user/login/login.component';
import { MeComponent } from './view/user/me/me.component';
import { SignupComponent } from './view/user/signup/signup.component';
import { NotFoundComponent } from './view/not-found/not-found.component';
import { MatCardModule } from '@angular/material/card';

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
    MeComponent,
    NotFoundComponent,
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
    MatCardModule,
  ],
  providers: [
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 15000 } },
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
