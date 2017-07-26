import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {SliciceService} from '../slicice.service';
import {Slicice} from '../slicice.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PorudzbinaService} from '../../porudzbina/porudzbina.service';
import {Korisnici} from "../../korisnici/korisnici.model";
import {KorisniciService} from "../../korisnici/korisnici.service";

@Component({
  selector: 'app-slicica',
  templateUrl: './slicica.component.html',
  styleUrls: ['./slicica.component.css']
})
export class SlicicaComponent implements OnInit {
  private subscription: Subscription;
  slicice: Slicice;
  token: Korisnici;
  constructor(private sliciceService: SliciceService, private porudzbinaService: PorudzbinaService, private korisniciService: KorisniciService,
              private route: ActivatedRoute, private router: Router) {
    this.token = JSON.parse(localStorage.getItem('token'));
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      let id_slicice = +params['id_slicice'];
      this.loadSlicica(id_slicice);
    });
  }

  loadSlicica(id_slicice: number) {
    this.sliciceService.getSlicica(id_slicice).subscribe(data => this.slicice = data);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  addToCart(id_slicice: number) {
    id_slicice = parseFloat(id_slicice.toLocaleString());
    this.porudzbinaService.addToCart(id_slicice);
  }
}
