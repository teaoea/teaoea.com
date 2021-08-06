import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from '../signup/signup.component';
import { SigninComponent } from '../signin/signin.component';
import { AuthGuard } from '../../tools/guard/auth/auth.guard';
import { MeComponent } from '../me/me.component';
import { ModifyPasswordComponent } from '../modify-password/modify-password.component';

const userRouters: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(userRouters)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
