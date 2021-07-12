import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { SigninGuard } from './tools/signin.guard';
import { MeComponent } from './user/me/me.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'account/signup', component: SignupComponent},
  {path: 'account/signin', component: SigninComponent},
  {
    path: 'account', canActivate: [SigninGuard], children: [
      {path: 'me', component: MeComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
