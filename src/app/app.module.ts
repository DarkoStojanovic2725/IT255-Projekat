import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumiComponent } from './albumi/albumi.component';
import { AdminModule } from './admin/admin.module';
import { PorudzbinaComponent } from './porudzbina/porudzbina.component';
import {ZajednickiServisService} from './zajednickiServis/zajednicki-servis.service';
import {SliciceService} from './slicice/slicice.service';
import {SliciceModule} from './slicice/slicice.module';
import { KorisniciComponent } from './korisnici/korisnici.component';
import {KorisniciService} from './korisnici/korisnici.service';
import { RegistracijaComponent } from './korisnici/registracija/registracija.component';
import { LoginComponent } from './korisnici/login/login.component';
import {AdminGuard} from './admin.guard';
import { DistribucijaComponent } from './distribucija/distribucija.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumiComponent,
    PorudzbinaComponent,
    KorisniciComponent,
    RegistracijaComponent,
    LoginComponent,
    DistribucijaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AdminModule,
    SliciceModule
  ],
  providers: [ZajednickiServisService, SliciceService, KorisniciService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
