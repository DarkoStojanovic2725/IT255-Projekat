import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminComponent} from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import {PorudzbinePipe} from '../porudzbine.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    AdminComponent,
    PorudzbinePipe
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
