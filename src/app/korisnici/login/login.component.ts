import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router';
import {KorisniciService} from '../korisnici.service';
import {Korisnici} from '../korisnici.model';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token: Korisnici;
  model: any = {};
  naCekanju: boolean = false;

  constructor(private korisniciService: KorisniciService, private router: Router) { this.token = JSON.parse(localStorage.getItem('token')); }

  ngOnInit() {
  }
  login() {
    this.naCekanju = true;
    this.korisniciService.login(this.model.username, this.model.password).subscribe(data => {
      let timer = TimerObservable.create(1000, 500);
      timer.subscribe(t => {
        location.reload();
        this.router.navigate(['/home']);
      });
    });
  }
}
