import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistorComponent } from './registor.component';
import { RegistorcheckComponent } from './registorcheck/registorcheck.component';
import { RegistorcomfirmComponent } from './registorcomfirm/registorcomfirm.component';
import { RegistorcompleteComponent } from './registorcomplete/registorcomplete.component';
import { RegistorRouting } from './registor-routing.module';



@NgModule({
  declarations: [
    RegistorComponent,
    RegistorcheckComponent,
    RegistorcomfirmComponent,
    RegistorcompleteComponent
  ],
  imports: [
    CommonModule,
    RegistorRouting
  ]
})
export class RegistorModule { }
