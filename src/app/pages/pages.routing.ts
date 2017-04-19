import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'users', loadChildren: 'app/pages/users/user.module#UserModule' },
      { path: 'users/:userId', loadChildren: 'app/pages/users/user-details/user-details.module#UserDetailModule' },
      { path: 'houses', loadChildren: 'app/pages/houses/houses.module#HousesModule' },
      { path: 'trans', loadChildren: 'app/pages/transaction/transaction.module#TransactionModule' },
      { path: 'trans/:tranId', loadChildren: 'app/pages/transaction/transaction-details/transaction-details.module#TransactionDetailsModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' },

    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
