import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminGuard} from "../admin.guard";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'admin', component: AdminComponent, canActivate: [AdminGuard]}
  ])
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
