import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveApprovingAdminPageRoutingModule } from './leave-approving-admin-routing.module';

import { LeaveApprovingAdminPage } from './leave-approving-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveApprovingAdminPageRoutingModule
  ],
  declarations: [LeaveApprovingAdminPage]
})
export class LeaveApprovingAdminPageModule {}
