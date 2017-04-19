import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionDetailsComponent } from './transaction-details.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: TransactionDetailsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);