import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {ZajednickiServisService} from '../zajednickiServis/zajednicki-servis.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  data: Object[];
  constructor(private http: Http, private zajednickiServis: ZajednickiServisService) {
  let headers = this.zajednickiServis.getHeaders();
  http.get('http://localhost/IT255-PROJ-PHP/porudzbine/getSve.php', {headers: headers})
    .map(res => res.json()).subscribe(data => {
      this.data = data;
      console.log('Success');
  },
    err => console.log(err.text),
    () => {
    }
  );
  }

  ngOnInit() {
  }

}
