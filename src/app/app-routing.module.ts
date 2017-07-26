import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlbumiComponent} from './albumi/albumi.component';
import {PorudzbinaComponent} from './porudzbina/porudzbina.component';
import {KorisniciComponent} from './korisnici/korisnici.component';
import {DistribucijaComponent} from './distribucija/distribucija.component';
@NgModule({
  imports: [RouterModule.forRoot(
    [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'albumi', component: AlbumiComponent},
      {path: 'home', component: HomeComponent},
      {path: 'korpa', component: PorudzbinaComponent},
      {path: 'nalog', component: KorisniciComponent},
      {path: 'distribucija', component: DistribucijaComponent}
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
