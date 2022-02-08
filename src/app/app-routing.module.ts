import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/app/_helper/auth.guard'

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'mypagetop',
    loadChildren: () =>
      import('./login/mypage-top/mypage-top.module').then((m) => m.mypagetopModule),
      canActivate: [AuthGuard]
  },
  {
    path: 'registor',
    loadChildren: () =>
      import('./login/registor/registor.module').then((m) => m.RegistorModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
