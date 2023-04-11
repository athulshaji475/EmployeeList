import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RejectedLEavesPageRoutingModule } from './rejected-leaves-routing.module';

import { RejectedLEavesPage } from './rejected-leaves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RejectedLEavesPageRoutingModule
  ],
  declarations: [RejectedLEavesPage]
})
export class RejectedLEavesPageModule {}
