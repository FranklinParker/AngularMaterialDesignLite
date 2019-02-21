import {Injectable} from '@angular/core';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Product[] = [{
    productName: 'Coffee from Jamaica',
    price: 12.99,
    productType: 'Coffee'
  }, {
    productName: 'Coffee from Cuba',
    price: 14.99,
    productType: 'Coffee'
  }];

  constructor() {
  }

  public getProducts(): Product[] {
    return this.products;
  }
}
