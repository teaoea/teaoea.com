import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import './language';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './ui/header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomeComponent } from './ui/home/home.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SignupComponent } from './user/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SigninComponent } from './user/signin/signin.component';
import { UsernameComponent } from './ui/user/username/username.component';
import { PasswordComponent } from './ui/user/password/password.component';
import { ConfirmPasswordComponent } from './ui/user/confirm-password/confirm-password.component';
import { EmailComponent } from './ui/user/email/email.component';
import { PhoneComponent } from './ui/user/phone/phone.component';
import { MeComponent } from './user/me/me.component';
import { httpInterceptorProviders } from './tools/interceptor/http-interceptor';
import { WriteComponent } from './article/write/write.component';
import { TitleComponent } from './ui/article/title/title.component';
import { CategoryComponent } from './ui/article/category/category.component';
import { ShowComponent } from './ui/article/show/show.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { ModifyPasswordComponent } from './user/modify-password/modify-password.component';
import { VerificationCodeComponent } from './ui/user/verification-code/verification-code.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    UsernameComponent,
    PasswordComponent,
    ConfirmPasswordComponent,
    EmailComponent,
    PhoneComponent,
    MeComponent,
    WriteComponent,
    TitleComponent,
    CategoryComponent,
    ShowComponent,
    NotFoundComponent,
    ModifyPasswordComponent,
    VerificationCodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 1500
      }
    },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
