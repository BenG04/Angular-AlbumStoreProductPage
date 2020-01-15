import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  albumUrl = '../assets/album.json';

  getAlbum(id: number) {
    return this.http.get(this.albumUrl).map((response) => response.json());
  }
}
