import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistRoutingModule } from './regist-routing.module';
import { RegistComponent } from './regist.component';
import { RegistcomfirmComponent } from './registcomfirm/registcomfirm.component';
import { RegistcomplateComponent } from './registcomplate/registcomplate.component';
import { RegistchangeComponent } from './registchange/registchange.component';


@NgModule({
  declarations: [
    RegistComponent,
    RegistcomfirmComponent,
    RegistcomplateComponent,
    RegistchangeComponent
  ],
  imports: [
    CommonModule,
    RegistRoutingModule
  ]
})
export class RegistModule { }
