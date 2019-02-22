import {Component, OnInit, Inject} from '@angular/core';
import {MdlDialogReference} from '@angular-mdl/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Product;
  form: FormGroup;

  constructor(private dialog: MdlDialogReference,
              private fb: FormBuilder,
              @Inject('product') product: Product) {
    this.product = product;
  }

  ngOnInit() {
    this.form = this.fb.group({
      productName: [this.product.productName, Validators.required],
      productType: [this.product.productType, Validators.required],

    });
  }

  onSave() {
    this.dialog.hide();
  }
  onCancel() {
    this.dialog.hide();

  }

}
