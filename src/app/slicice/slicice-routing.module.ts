import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SlicicaComponent} from './slicica/slicica.component';
import {SliciceComponent} from 'app/slicice/slicice.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'slicice', component: SliciceComponent},
      {path: 'slicice/:id_slicice', component: SlicicaComponent}
    ])
  ],
  exports: [RouterModule]
})
export class SliciceRoutingModule { }
