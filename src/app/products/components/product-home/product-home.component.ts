import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';
import {AuthService} from '../../../auth/services/auth.service';
import {User} from '../../../auth/models/user';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss'],

})
export class ProductHomeComponent implements OnInit, OnDestroy {
  subs: Subscription;
  userSubs: Subscription;
  routeSubs: Subscription;
  products: Product[] = [];
  newProduct: string;
  user: User;

  constructor(private productService: ProductsService,
              private authService: AuthService,
              private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.userSubs = this.authService.getLoggedInUserAsObservable()
      .subscribe((user: User) => {
        this.user = user;
      });
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
    this.userSubs.unsubscribe();
  }


  showFlashNewProd(newProd: string) {
    this.newProduct = newProd;
    setTimeout(() => {
      this.newProduct = undefined;
    }, 3000);

  }

  get editAllowed() {
    return this.user && this.user.admin;
  }

}
