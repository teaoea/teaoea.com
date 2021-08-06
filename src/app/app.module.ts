import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import './language';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './tools/interceptor/http-interceptor';
import { UserModule } from './user/module/user.module';
import { ArticleModule } from './article/module/article.module';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/home/home.component';
import { FooterComponent } from './ui/footer/footer.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { MeComponent } from './user/me/me.component';
import { PasswordComponent } from './ui/user/password/password.component';
import { EmailComponent } from './ui/user/email/email.component';
import { CategoryComponent } from './ui/article/category/category.component';
import { ModifyPasswordComponent } from './user/modify-password/modify-password.component';
import { WriteComponent } from './article/write/write.component';
import { ShowComponent } from './ui/article/show/show.component';
import { SignupComponent } from './user/signup/signup.component';
import { ConfirmPasswordComponent } from './ui/user/confirm-password/confirm-password.component';
import { VerificationCodeComponent } from './ui/user/verification-code/verification-code.component';
import { TitleComponent } from './ui/article/title/title.component';
import { UsernameComponent } from './ui/user/username/username.component';
import { SigninComponent } from './user/signin/signin.component';
import { PhoneComponent } from './ui/user/phone/phone.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

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
    UserModule,
    ArticleModule,
    AppRoutingModule,
    BrowserModule,
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
