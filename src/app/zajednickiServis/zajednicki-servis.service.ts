import { Injectable } from '@angular/core';
import {Headers} from '@angular/http';

@Injectable()
export class ZajednickiServisService {
headers = new Headers();
  constructor() {
    this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    if (localStorage.getItem('token')) {
      this.headers.append('token', localStorage.getItem('token'));
    }
  }
getHeaders(): Headers {
    return this.headers;
}
}
