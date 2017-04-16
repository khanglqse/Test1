import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HousesComponent } from './houses.component';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: '', component: HousesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);