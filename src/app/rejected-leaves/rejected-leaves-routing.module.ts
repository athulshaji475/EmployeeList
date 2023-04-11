import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RejectedLEavesPage } from './rejected-leaves.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedLEavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RejectedLEavesPageRoutingModule {}
