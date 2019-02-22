import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit, OnDestroy {
  subs: Subscription;
  products: Product[] = [];

  constructor(private productService: ProductsService) {
  }

  ngOnInit() {
    this.subs = this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
