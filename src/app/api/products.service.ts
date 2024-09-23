import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  get(){
    return this._http.get("https://api.lacasaimperial.com/store/products");
  }
}
