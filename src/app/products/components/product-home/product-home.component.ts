import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

}
