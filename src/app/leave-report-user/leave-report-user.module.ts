import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveReportUserPageRoutingModule } from './leave-report-user-routing.module';

import { LeaveReportUserPage } from './leave-report-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveReportUserPageRoutingModule
  ],
  declarations: [LeaveReportUserPage]
})
export class LeaveReportUserPageModule {}
