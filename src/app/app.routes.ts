import { Routes } from '@angular/router';

// User Login
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

// Pre - Login
import { PreLoginComponent } from './components/pre-login/pre-login.component';

// modules-main
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

import { DashboardComponent } from './modules/dashboard/dashboard.component';

import { ReportsComponent } from './modules/reports/reports.component';

// Manage User
import { ManageUserComponent } from './modules/manage-user/manage-user.component';
import { UserDetailsComponent } from './modules/manage-user/components/user-details/user-details.component';
import { AddUserComponent } from './modules/manage-user/components/add-user/add-user.component';

// Generate Bill
import { GenerateBillComponent } from './modules/generate-bill/generate-bill.component';
import { CalculateBillComponent } from './modules/generate-bill/components/calculate-bill/calculate-bill.component';
import { BillComponent } from './modules/generate-bill/components/bill/bill.component';

// Profile
import { ProfileComponent } from './modules/profile/profile.component';

export const routes: Routes = [

  { path: '', redirectTo: 'pre-login', pathMatch: 'full' },


  { path: 'pre-login', component: PreLoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'reports', component: ReportsComponent },
      {
        path: 'manage-user',
        component: ManageUserComponent,
        children: [
          { path: '',         redirectTo: 'add', pathMatch: 'full' },
          { path: 'add',      component: AddUserComponent },
          { path: 'list',     component: UserDetailsComponent },
        ],
      },
      {
        path: 'generate-bill',
        component: GenerateBillComponent,
        children: [
          { path: '',          redirectTo: 'calculate', pathMatch: 'full' },
          { path: 'calculate', component: CalculateBillComponent },
          { path: 'bill',      component: BillComponent },
        ],
      },
      { path: 'profile', component: ProfileComponent },

      { path: '**', redirectTo: 'dashboard' },
    ],
  },
  { path: '**', redirectTo: 'pre-login' },
];
