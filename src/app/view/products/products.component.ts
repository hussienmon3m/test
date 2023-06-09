import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/products";
import {ProductsService} from "../../service/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService
      .getAll()
      .subscribe(data => this.products = data);
  }

}
