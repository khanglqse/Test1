import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: UserComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);