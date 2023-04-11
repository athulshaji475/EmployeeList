import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveFormPage } from './leave-form.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveFormPageRoutingModule {}
