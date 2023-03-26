import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(){
    return this.httpClient.get<Product[]>("https://fakestoreapi.com/products");
  }
}
