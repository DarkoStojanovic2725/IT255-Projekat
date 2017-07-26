import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Korisnici} from './korisnici.model';
import {ZajednickiServisService} from '../zajednickiServis/zajednicki-servis.service';
import 'rxjs/add/operator/map';
import {TimerObservable} from 'rxjs/observable/TimerObservable';

@Injectable()
export class KorisniciService {
private urlLocal = 'http://localhost/IT255-PROJ-PHP/korisnici/';
  constructor(private http: Http, private zajednickiServis: ZajednickiServisService) { }

getKorisnici(): Observable<Korisnici> {
    let headers = this.zajednickiServis.getHeaders();
    return this.http.get(this.urlLocal + 'get.php', {headers: headers}).map((response: Response) => <Korisnici> response.json());
}
register(username: string, password: string, email: string, adresa: string) {
    let data = 'username=' + username + '&password=' + password + '&email=' + email + '&adresa=' + adresa;
    let headers = this.zajednickiServis.getHeaders();
    return this.http.post(this.urlLocal + 'register.php', data, {headers: headers}).map((response: Response) => {
      let korisnici = response.json();
      if (korisnici && korisnici.token) {
        localStorage.setItem('token', JSON.stringify(korisnici.token));
      }
    });
}

login(username: string, password: string) {
    let data = 'username=' + username + '&password=' + password;
    let headers = this.zajednickiServis.getHeaders();
    return this.http.post(this.urlLocal + 'login.php', data, {headers: headers}).map((response: Response) => {
      let korisnici = response.json();
      if (korisnici && korisnici.token) {
        localStorage.setItem('token', JSON.stringify(korisnici.token));
      }
    });
}
logout() {
    console.log("test");
    localStorage.removeItem('token');
    let timer = TimerObservable.create(1000, 500);
    timer.subscribe(t => {location.reload(); });
}
}
