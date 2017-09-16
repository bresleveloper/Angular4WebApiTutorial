import { Component, OnInit } from '@angular/core';
import { ProductRestApiService } from '../product-rest-api.service';

@Component({
  selector: 'app-find-product-by-id',
  templateUrl: './find-product-by-id.component.html',
  styleUrls: ['./find-product-by-id.component.css']
})
export class FindProductByIdComponent implements OnInit {

  constructor(private productsService:ProductRestApiService) { }
  ngOnInit() {  }

  id = '';
  resultsHtml = '';

  find(){
    this.productsService.FindProductById(this.id)
      .then( (p) => {
        //this.resultsHtml = p.Name + ': $' + p.Price;
        console.log('find promise then');
        console.log(p);
        this.resultsHtml = p['Name'] + ': $' + p['Price'];
      });
  }
}
