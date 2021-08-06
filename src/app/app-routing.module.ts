import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home/home.component';
import { NotFoundComponent } from './ui/not-found/not-found.component';

const appRouters: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRouters)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
