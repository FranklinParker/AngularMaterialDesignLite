import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss'],

})
export class ProductHomeComponent implements OnInit, OnDestroy {
  subs: Subscription;
  routeSubs: Subscription;
  products: Product[] = [];
  newProduct: string;

  constructor(private productService: ProductsService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subs = this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
    this.routeSubs = this.activeRoute.params.subscribe(params => {
      const newProd = params['newProduct'];
      if (newProd) {
        this.showFlashNewProd(newProd);
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.routeSubs.unsubscribe();
  }



  showFlashNewProd(newProd: string) {
    this.newProduct = newProd;
    setTimeout(() => {
      this.newProduct = undefined;
    }, 3000);

  }


}
