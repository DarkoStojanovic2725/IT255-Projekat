import { Component, OnInit } from '@angular/core';
import {PorudzbinaService} from './porudzbina.service';
import {Slicice} from '../slicice/slicice.model';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-porudzbina',
  templateUrl: './porudzbina.component.html',
  styleUrls: ['./porudzbina.component.css']
})
export class PorudzbinaComponent implements OnInit {
  porudzbina: Slicice[];
  izvrseno: boolean = false;
  constructor(private porudzbinaService: PorudzbinaService, private router: Router) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.porudzbinaService.getCartInfo().subscribe(data => {this.porudzbina = data; });
  }
  remove(id_slicice: number) {
    this.porudzbinaService.removeFromCart(id_slicice);
  }
  checkout() {
    this.izvrseno = true;
    this.porudzbinaService.checkout();
    let timer = TimerObservable.create(1000, 500);
    timer.subscribe(t => {
      location.reload();
      this.router.navigate(['/korpa']);
    });
  }
}
