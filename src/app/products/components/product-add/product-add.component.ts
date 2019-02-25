import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  keysAllowed = '.01233456789';
  headerMessage = 'Add Product';
  headerTextColor = 'white';
  form: FormGroup;

  constructor(private productService: ProductsService,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      productName: [' ', Validators.required],
      productType: ['', Validators.required],
      price: [0.0, Validators.required],
    });
  }

  async onSave() {
    const {productName, productType, price} = this.form.value;
    if (productName.trim().length === 0) {
      this.headerMessage = 'Product Name Must Not be an Empty String';
      this.headerTextColor = 'red';
      this.form.patchValue({
        productName: '',
      });
    } else if (price === 0) {
      this.headerMessage = 'Price must greater than Zero';
      this.headerTextColor = 'red';
      this.form.patchValue({
        price: undefined,
      });
    } else {
      const productToSave: Product = {
        productName,
        productType,
        price
      };
      console.log('productToSave', productToSave);
      this.productService.addProduct(productToSave);
      this.router.navigate(['/product/list', {newProduct: productToSave.productName}]);
    }

  }

  onResetHeader() {
    this.headerMessage = 'Add Product';
    this.headerTextColor = 'white';
  }

  onPriceKeyPress(event: KeyboardEvent) {
    const idx = this.keysAllowed.indexOf(event.key);
    if (idx === -1) {
      event.preventDefault();
    } else {
      this.onResetHeader();
    }
  }

}
