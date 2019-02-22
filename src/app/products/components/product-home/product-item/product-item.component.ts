import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../models/product';
import {MdlDialogService} from '@angular-mdl/core';
import {ProductEditComponent} from '../product-edit/product-edit.component';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() backgroundColor: string;

  constructor(private dialogService: MdlDialogService) {
  }

  ngOnInit() {
  }

  getBackgroundColor() {
    return {
      'background-color': this.backgroundColor
    };
  }

  onEdit() {
    this.dialogService.showCustomDialog({
      isModal: true,
      component: ProductEditComponent,
      providers: [{provide: 'product', useValue: this.product}],

    });
  }
}
