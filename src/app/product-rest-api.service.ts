import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProductRestApiService {

  constructor (private http: Http) {
    this.GetAllProducts();
  }

  products = [];
  private url = 'http://localhost:57267/api/products'; 

  GetAllProducts() {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.url)
        .toPromise()
        .then(
          res => { // Success
            this.products = res.json();
            resolve();
          }
        );
    });
    return promise;
  }

  FindProductById(id) {
    let promise = new Promise((resolve, reject) => {
      this.http.get(this.url + '/' + id)
        .toPromise()
        .then(
          res => { // Success
            resolve(res.json());
          }
        );
    });
    return promise;
  }




}
