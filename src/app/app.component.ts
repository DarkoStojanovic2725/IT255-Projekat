import { Component } from '@angular/core';
import {Korisnici} from './korisnici/korisnici.model';
import {KorisniciService} from './korisnici/korisnici.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  token: Korisnici;

  constructor(private korisniciService: KorisniciService) {
    this.token = JSON.parse(localStorage.getItem('token'));
  }
  ngOnInit() {
    if (this.token) {
      this.loadKorisnik();
    }
  }
  loadKorisnik() {
    this.korisniciService.getKorisnici().subscribe(data => this.token = data);
  }
  logout() {
    this.korisniciService.logout();
  }
}
