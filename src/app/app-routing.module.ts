import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { MeComponent } from './user/me/me.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'account', children: [
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent},
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
