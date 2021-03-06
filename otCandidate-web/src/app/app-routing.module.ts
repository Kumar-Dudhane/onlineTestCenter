import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommanLayoutComponent } from './_shared/layout/comman-layout/comman-layout.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthLayoutComponent } from './_shared/layout/auth-layout/auth-layout.component';

const routes: Routes = [ {
  path: '',
  redirectTo: 'user/login',
  pathMatch: 'full',
},
{
  path: '',
  component: CommanLayoutComponent,
  children: [
    {
      path: 'dashboard',
      loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
      path: 'exam',
      loadChildren: './exam-center/exam-center.module#ExamCenterModule'
    },

  ],
  canActivate: [AuthGuardService]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [
    {
      path: 'user',
      loadChildren: './auth/auth.module#AuthModule'
    }
  ]
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
