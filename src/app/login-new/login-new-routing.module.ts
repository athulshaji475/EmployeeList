import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginNewPage } from './login-new.page';

const routes: Routes = [
  {
    path: '',
    component: LoginNewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginNewPageRoutingModule {}
