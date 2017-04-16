import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailComponent } from './user-details.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: UserDetailComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);