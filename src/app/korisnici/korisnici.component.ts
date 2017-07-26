import { Component, OnInit } from '@angular/core';
import {KorisniciService} from './korisnici.service';
import {Korisnici} from './korisnici.model';
@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit {
  token: Korisnici;
  constructor(private korisniciService: KorisniciService) { this.token = JSON.parse(localStorage.getItem('token')); }

  ngOnInit() {
  }
logout() {
    this.korisniciService.logout();
}
}
