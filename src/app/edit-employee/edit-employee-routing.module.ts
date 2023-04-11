import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditEmployeePage } from './edit-employee.page';

const routes: Routes = [
  {
    path: '',
    component: EditEmployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditEmployeePageRoutingModule {}
