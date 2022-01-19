import { NgModule } from '@angular/core';
import { MypageTopComponent } from './mypage-top.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: MypageTopComponent },
  {
    path: 'regist',
    loadChildren: () =>
      import('./regist/regist.module').then((m) => m.RegistModule),
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypagetopRoutingModule {}
