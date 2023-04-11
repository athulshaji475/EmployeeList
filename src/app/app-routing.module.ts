import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login-new',
    pathMatch: 'full'
  },
  {
    path: 'employee-list',
    loadChildren: () => import('./employee-list/employee-list.module').then( m => m.EmployeeListPageModule)
  },
  {
    path: 'view-employee',
    loadChildren: () => import('./view-employee/view-employee.module').then( m => m.ViewEmployeePageModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () => import('./edit-employee/edit-employee.module').then( m => m.EditEmployeePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'leave-form',
    loadChildren: () => import('./leave-form/leave-form.module').then( m => m.LeaveFormPageModule)
  },
  {
    path: 'leave-report-user',
    loadChildren: () => import('./leave-report-user/leave-report-user.module').then( m => m.LeaveReportUserPageModule)
  },
  {
    path: 'leave-approving-admin',
    loadChildren: () => import('./leave-approving-admin/leave-approving-admin.module').then( m => m.LeaveApprovingAdminPageModule)
  },
  {
    path: 'rejected-leaves',
    loadChildren: () => import('./rejected-leaves/rejected-leaves.module').then( m => m.RejectedLEavesPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login-new',
    loadChildren: () => import('./login-new/login-new.module').then( m => m.LoginNewPageModule)
  },
 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
