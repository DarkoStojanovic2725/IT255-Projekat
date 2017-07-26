import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Slicice} from './slicice.model';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {ZajednickiServisService} from '../zajednickiServis/zajednicki-servis.service';



@Injectable()
export class SliciceService {
  private urlLocal = 'http://localhost/IT255-PROJ-PHP/slicice/';
  constructor(private http: Http, private zajednickiServis: ZajednickiServisService) { }

  getSlicice(): Observable<Slicice[]> {
    return this.http.get(this.urlLocal + 'getSlicice.php').map((response: Response) => <Slicice[]> response.json().slicice);
  }
  getSlicica(id_slicice: number): Observable<Slicice> {
    return this.getSlicice().map((slicice: Slicice[]) => slicice.find(s => s.id_slicice === id_slicice));
  }
}

