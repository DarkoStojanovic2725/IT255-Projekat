import { Component, OnInit } from '@angular/core';
import {Slicice} from './slicice.model';
import {SliciceService} from './slicice.service';
import {PorudzbinaService} from '../porudzbina/porudzbina.service';

@Component({
  selector: 'app-slicice',
  templateUrl: './slicice.component.html',
  styleUrls: ['./slicice.component.css']
})
export class SliciceComponent implements OnInit {
  slicica: Slicice[];
  constructor(private sliciceService: SliciceService, private porudzbinaService: PorudzbinaService) { }

  ngOnInit() {
    this.loadSlicice();
  }

  loadSlicice() {
    this.sliciceService.getSlicice().subscribe(data => this.slicica = data);
  }
  addToCart(id_slicice: number) {
    id_slicice = parseFloat(id_slicice.toString());
    this.porudzbinaService.addToCart(id_slicice);
  }
}
