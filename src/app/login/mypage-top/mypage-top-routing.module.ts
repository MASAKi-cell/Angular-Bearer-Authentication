import { NgModule } from '@angular/core';
import { MypageTopComponent } from './mypage-top.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'mypagetop', component: MypageTopComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MypagetopRoutingModule {}
