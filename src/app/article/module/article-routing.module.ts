import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../../tools/guard/auth/auth.guard';
import { WriteComponent } from '../write/write.component';

const articleRouters: Routes = [
  {
    path: 'article', canActivateChild: [AuthGuard], children: [
      {path: 'write', component: WriteComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(articleRouters)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
