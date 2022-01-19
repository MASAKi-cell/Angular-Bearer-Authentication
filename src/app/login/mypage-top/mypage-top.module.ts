import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MypagetopRoutingModule } from './mypage-top-routing.module'
import { MypageTopComponent } from './mypage-top.component';

@NgModule({
  declarations: [MypageTopComponent],
  imports: [
    CommonModule,
    MypagetopRoutingModule
  ],
})
export class mypagetopModule {}

