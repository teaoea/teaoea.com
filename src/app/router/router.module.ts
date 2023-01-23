import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../view/home/home.component';
import { LoginComponent } from '../view/user/login/login.component';
import { MeComponent } from '../view/user/me/me.component';
import { SignupComponent } from '../view/user/signup/signup.component';
import { NotFoundComponent } from '../view/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
  { path: 'account/signup', component: SignupComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/info', component: MeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }, // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
})
export class AppRouterModule {}
