import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistorComponent } from './registor.component';
import { RegistorcheckComponent } from './registorcheck/registorcheck.component';
import { RegistorcomfirmComponent } from './registorcomfirm/registorcomfirm.component';
import { RegistorcompleteComponent } from './registorcomplete/registorcomplete.component';

const routes: Routes = [
  { path: '', component: RegistorComponent },
  { path: 'registorcheck', component: RegistorcheckComponent },
  { path: 'registorcomfirm', component: RegistorcomfirmComponent },
  { path: 'registorcomplate',component: RegistorcompleteComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistorRouting {}
