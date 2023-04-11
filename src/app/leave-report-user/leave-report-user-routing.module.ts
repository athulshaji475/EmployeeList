import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveReportUserPage } from './leave-report-user.page';

const routes: Routes = [
  {
    path: '',
    component: LeaveReportUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeaveReportUserPageRoutingModule {}
