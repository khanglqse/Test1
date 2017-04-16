import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionComponent } from './transaction.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: TransactionComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);