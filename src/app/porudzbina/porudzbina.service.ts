import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ZajednickiServisService} from '../zajednickiServis/zajednicki-servis.service';
import {Observable} from 'rxjs/Observable';
import {Slicice} from '../slicice/slicice.model';

@Injectable()
export class PorudzbinaService {

  private urlLocal = 'http://localhost/IT255-PROJ-PHP/porudzbine/';
  constructor(private http: Http, private zajednickiServis: ZajednickiServisService) { }

  addToCart(id_slicice: number) {
    let data = 'id_slicice=' + id_slicice;
    let headers = this.zajednickiServis.getHeaders();
    this.http.post(this.urlLocal + 'dodajUKorpu.php', data, {headers: headers}).map(res => res).subscribe(data => {console.log(data);
    });
  }

  removeFromCart(id_slicice: number) {
    let data = 'id_slicice=' + id_slicice;
    let headers = this.zajednickiServis.getHeaders();
    this.http.post(this.urlLocal + 'obrisiIzKorpe.php', data, {headers: headers}).map(res => res).subscribe(data => data);
  }

  getCartInfo(): Observable<Slicice[]> {
    let headers = this.zajednickiServis.getHeaders();
    return this.http.get(this.urlLocal + 'getPorudzbine.php', {headers: headers}).map((response: Response) => <Slicice[]> response.json());
  }

  checkout() {
    let headers = this.zajednickiServis.getHeaders();
    this.http.get(this.urlLocal + 'checkout.php', {headers: headers}).map(res => res).subscribe(data => data);
  }
}
