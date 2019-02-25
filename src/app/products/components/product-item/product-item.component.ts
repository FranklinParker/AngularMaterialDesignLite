import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../models/product';
import {MdlDialogReference, MdlDialogService} from '@angular-mdl/core';
import {ProductEditComponent} from '../product-edit/product-edit.component';
import {MessageModalComponent} from '../../../shared/components/message-modal/message-modal.component';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() backgroundColor: string;

  constructor(private dialogService: MdlDialogService,
              private productService: ProductsService) {
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

  onDelete() {
    this.dialogService.showCustomDialog({
      isModal: true,
      component: MessageModalComponent,
      providers: [{provide: 'message', useValue: `Delete Product ${this.product.productName} ?`}],

    })
      .subscribe((dialogRef: MdlDialogReference) => {
        dialogRef.onHide().subscribe((confirm: boolean) => {
          if (confirm) {
            this.productService.deleteProduct(this.product.id);
          }
        });

      });
  }
}
