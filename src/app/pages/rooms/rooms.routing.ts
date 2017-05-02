import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RoomsComponent } from './rooms.component';


const routes: Routes = [
  { path: '', component: RoomsComponent },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);