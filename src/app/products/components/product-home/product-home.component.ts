import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit, OnDestroy {
  subs: Subscription;
  routeSubs: Subscription;
  products: Product[] = [];

  constructor(private productService: ProductsService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.subs = this.productService.getProducts()
      .subscribe((products: Product[]) => {
        this.products = products;
      });
    this.routeSubs = this.activeRoute.params.subscribe(params => {
     console.log('params', params['newProduct']);
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
