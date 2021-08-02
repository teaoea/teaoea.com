import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { SigninComponent } from './user/signin/signin.component';
import { MeComponent } from './user/me/me.component';
import { WriteComponent } from './article/write/write.component';
import { AuthGuard } from './tools/guard/auth/auth.guard';
import { NotFoundComponent } from './ui/not-found/not-found.component';
import { ModifyPasswordComponent } from './user/modify-password/modify-password.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'account', children: [
      {path: 'signup', component: SignupComponent},
      {path: 'signin', component: SigninComponent}
    ]
  },
  {
    path: 'account', canActivateChild: [AuthGuard], children: [
      {path: 'me', component: MeComponent},
      {
        path: 'modify', children: [
          {path: 'password', component: ModifyPasswordComponent}
        ]
      }
    ]
  },
  {
    path: 'article', canActivateChild: [AuthGuard], children: [
      {path: 'write', component: WriteComponent}
    ]
  },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
