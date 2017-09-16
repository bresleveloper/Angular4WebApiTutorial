import { Component, OnInit } from '@angular/core';
import { ProductRestApiService } from '../product-rest-api.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  constructor(public productsService:ProductRestApiService) {}
  ngOnInit() {  }
}
