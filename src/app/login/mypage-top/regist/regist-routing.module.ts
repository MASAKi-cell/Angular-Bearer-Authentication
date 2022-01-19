import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistComponent } from './regist.component';
import { RegistcomfirmComponent } from './registcomfirm/registcomfirm.component';
import { RegistcomplateComponent } from './registcomplate/registcomplate.component';
import { RegistchangeComponent } from './registchange/registchange.component';


const routes: Routes = [
  { path: '', component: RegistComponent },
  { path: 'registchange', component: RegistchangeComponent },
  { path: 'registcomfirm', component: RegistcomfirmComponent },
  { path: 'registcomplate',component: RegistcomplateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistRoutingModule { }
