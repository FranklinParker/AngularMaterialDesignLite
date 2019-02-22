import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../../services/products.service';
import {MdlDialogReference} from '@angular-mdl/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  form: FormGroup;
  constructor(private productService: ProductsService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      productName: ['', Validators.required],
      productType: ['', Validators.required],
      price: ['', Validators.required],
    });
  }

  onSave() {
    const { productName, productType, price} = this.form.value;
    const productToSave: Product = {
      productName,
      productType,
      price
    }
    console.log('productToSave', productToSave);
    this.productService.saveProduct(productToSave);
  }

}
