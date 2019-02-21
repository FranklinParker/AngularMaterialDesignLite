import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() backgroundColor: string;

  constructor() {
  }

  ngOnInit() {
  }

  getBackgroundColor() {
    return {
      'background-color': this.backgroundColor
    };
  }

}
