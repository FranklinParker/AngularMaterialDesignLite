import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Stitch, RemoteMongoClient} from 'mongodb-stitch-browser-sdk';

import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  mongoDb: any;
  private products: Product[] = [{
    id: '1',
    productName: 'Coffee from Jamaica',
    price: 12.99,
    productType: 'Coffee'
  }, {
    id: '2',
    productName: 'Coffee from Cuba',
    price: 14.99,
    productType: 'Coffee'
  }, {
    id: '3',
    productName: 'Coffee from Brazil',
    price: 20.99,
    productType: 'Coffee'
  }, {
    id: '4',
    productName: 'Coffee From Rwanda',
    price: 10.99,
    productType: 'Coffee'
  }];
  private productSubject = new BehaviorSubject<Product[]>(this.products);


   constructor() {
    this.mongoDb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
    this.loadProducts();
  }

  private async loadProducts() {
    try {
      const products = await this.mongoDb.db('mdldemo')
        .collection('products').find().asArray();
      const transformedProducts = [];
      products.forEach(prod => {
        const product: Product = {
          id: prod._id.toString(),
          productName: prod.productName,
          productType: prod.productType,
          price: prod.price
        };

        transformedProducts.push(product);
      });
      console.log('products', products);
      this.productSubject.next(products);
    } catch (err) {
      console.log('error get products', err);
    }
  }

  public getProducts(): Observable<Product[]> {
    return this.productSubject.asObservable();
  }

  public updateProduct(productSave: Product) {
    const productFind = this.products.find((product: Product) => product.id === productSave.id);
    if (productFind) {
      productFind.price = productSave.price;
      productFind.productType = productSave.productType;
      productFind.productName = productSave.productName;

    }
  }

  public addProduct(productSave: Product) {
    const newId: number = this.products.length + 1;
    productSave.id = newId.toString();
    this.products.unshift(productSave);
    this.productSubject.next(this.products);
    const productFind = this.products.find((product: Product) => product.id === productSave.id);

  }
}
