import { LoginComponent } from "../view/user/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "../view/user/signup/signup.component";
import { HomeComponent } from "../view/home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent, pathMatch: "full"},
  {path: "account/signup", component: SignupComponent},
  {path: "account/login", component: LoginComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRouterModule {
}
