import {Component, OnInit, Inject} from '@angular/core';
import {MdlDialogReference} from '@angular-mdl/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/product';
import {ProductsService} from '../../../services/products.service';
import {combineAll} from 'rxjs/operators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  form: FormGroup;

  constructor(private productService: ProductsService,
              private dialog: MdlDialogReference,
              private fb: FormBuilder,
              @Inject('product') product: Product) {
    this.product = product;
  }

  ngOnInit() {
    this.form = this.fb.group({
      productName: [this.product.productName, Validators.required],
      productType: [this.product.productType, Validators.required],
      price: [this.product.price, Validators.required],
    });
  }

  onSave() {
    const { productName, productType, price} = this.form.value;
    const productToSave: Product = {
      id: this.product.id,
      productName,
      productType,
      price
    }
    console.log('productToSave', productToSave);
    this.productService.saveProduct(productToSave);
    this.dialog.hide();
  }
  onCancel() {
    this.dialog.hide();

  }

}
