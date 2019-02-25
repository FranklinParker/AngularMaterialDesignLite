import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Stitch, RemoteMongoClient, BSON} from 'mongodb-stitch-browser-sdk';

import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  mongoDb: any;
  private products: Product[] = [];
  private productSubject = new BehaviorSubject<Product[]>(this.products);


  constructor() {
    this.mongoDb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
    this.loadProducts();
  }

  public getProducts(): Observable<Product[]> {
    return this.productSubject.asObservable();
  }

  public async updateProduct(productSave: Product) {
    try {
      console.log('id', productSave.id);
      const existProduct = await this.mongoDb.db('mdldemo')
        .collection('products')
        .find({_id: new BSON.ObjectId(productSave.id)})
        .toArray();
      console.log('found ', existProduct);
      if (!existProduct || existProduct.length === 0) {
        return {
          success: false,
          error: {
            title: 'Record Update failed Record Not Found',
          }
        };
      }
      await this.mongoDb.db('mdldemo')
        .collection('products')
        .updateOne({_id: new BSON.ObjectId(productSave.id)},
          {
            productName: productSave.productName,
            price: productSave.price,
            productType: productSave.productType
          });
      const productFind = this.products.find((product: Product) => product.id === productSave.id);
      if (productFind) {
        productFind.price = productSave.price;
        productFind.productType = productSave.productType;
        productFind.productName = productSave.productName;
      }
      return {
        success: true
      };

    } catch (e) {
      console.log('error updating', e);
      return {
        success: false,
        error: {
          title: 'Record Update failed',
          error: {
            code: 500,
            message: e.message
          }
        }
      };
    }
  }

  public async addProduct(product: Product) {
    const productSave: Product =
      Object.assign({}, {
        productType: product.productType,
        productName: product.productName,
        price: product.price
      });
    const saved = await this.mongoDb.db('mdldemo')
      .collection('products').insertOne(productSave);
    productSave.id = saved.insertedId.toString();
    this.products.unshift(productSave);
    this.productSubject.next(this.products);

  }

  public deleteProduct(id: string) {

    const result = this.mongoDb.db('mdldemo')
      .collection('products').deleteOne({_id: new BSON.ObjectId(id)})
      .then((res: { deletedCount: number }) => {
        const idx = this.products.findIndex((product: Product) => product.id === id);
        if (idx !== -1) {
          this.products.splice(idx, 1);
          this.productSubject.next(this.products);
        }
      })
      .catch(err => {
        alert('Delete Failed');
      });

  }

  private async loadProducts() {
    try {
      const productList = await this.mongoDb.db('mdldemo')
        .collection('products').find().asArray();
      productList.forEach(prod => {
        const product: Product = {
          id: prod._id.toString(),
          productName: prod.productName,
          productType: prod.productType,
          price: prod.price
        };

        this.products.push(product);
      });
      this.productSubject.next(this.products);
    } catch (err) {
      console.log('error get products', err);
    }
  }

}
