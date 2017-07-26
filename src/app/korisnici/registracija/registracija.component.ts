import { Component, OnInit } from '@angular/core';
import {Korisnici} from '../korisnici.model';
import {KorisniciService} from '../korisnici.service';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Route, Router} from '@angular/router';
import {Validators} from '@angular/forms';
@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {
  token: Korisnici;
  model: any = {};
  naCekanju: boolean = false;

  constructor(private korisniciService: KorisniciService, private router: Router) {
    this.token = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit() {
  }

  register() {
    this.naCekanju = true;
    this.korisniciService.register(
      this.model.username,
      this.model.password,
      this.model.email,
      this.model.adresa
    ).subscribe(data => {
      let timer = TimerObservable.create(1500, 100);
      timer.subscribe( t => {
        location.reload();
        this.router.navigate(['/home']);
      });
    });
  }
}
