import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Korisnici} from './korisnici/korisnici.model';
import {KorisniciService} from './korisnici/korisnici.service';

@Injectable()
export class AdminGuard implements CanActivate {
  token: Korisnici;
  constructor(private korisniciService: KorisniciService) {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.korisniciService.getKorisnici().subscribe(data => this.token = data);
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.token.role_name == 'admin') {
      return true;
    }
    return false;
  }
}
