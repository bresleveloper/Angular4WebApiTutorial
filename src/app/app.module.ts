import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FindProductByIdComponent } from './find-product-by-id/find-product-by-id.component';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ProductRestApiService } from './product-rest-api.service';


@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    FindProductByIdComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductRestApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
