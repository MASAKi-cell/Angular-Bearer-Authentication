import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'mypagetop',
    loadChildren: () =>
      import('./mypage-top/mypage-top.module').then((m) => m.mypagetopModule),
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
