import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDetailsComponent } from './house-details.component';

const routes: Routes = [
  { path: '', component: HouseDetailsComponent },
];

export const routing:ModuleWithProviders = RouterModule.forChild(routes);