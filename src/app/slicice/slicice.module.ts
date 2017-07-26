import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SliciceService} from './slicice.service';
import {SliciceComponent} from './slicice.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { SliciceRoutingModule } from './slicice-routing.module';
import { SlicicaComponent } from './slicica/slicica.component';
import {ZajednickiServisService} from '../zajednickiServis/zajednicki-servis.service';
import {PorudzbinaService} from '../porudzbina/porudzbina.service';

@NgModule({
  imports: [
    CommonModule,
    SliciceRoutingModule,
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  declarations: [
    SliciceComponent,
    SlicicaComponent
  ],
  providers: [
    SliciceService,
    ZajednickiServisService,
    PorudzbinaService
  ]
})
export class SliciceModule { }
