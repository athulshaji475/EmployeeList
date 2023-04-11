import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeaveFormPageRoutingModule } from './leave-form-routing.module';

import { LeaveFormPage } from './leave-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeaveFormPageRoutingModule
  ],
  declarations: [LeaveFormPage]
})
export class LeaveFormPageModule {}
