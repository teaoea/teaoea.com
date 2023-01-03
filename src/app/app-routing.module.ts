import { LoginComponent } from "./user/login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SignupComponent } from "./user/signup/signup.component";
import { HomeComponent } from "./tool/component/home/home.component";

// 不使用路由组,减少不必要的功能
const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "account/signup", component: SignupComponent },
  { path: "account/login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
