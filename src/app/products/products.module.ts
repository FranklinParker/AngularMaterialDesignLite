import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductHomeComponent} from './components/product-home/product-home.component';
import {ProductItemComponent} from './components/product-item/product-item.component';
import {ProductEditComponent} from './components/product-edit/product-edit.component';
import {MdlModule} from '@angular-mdl/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductImageComponent } from './components/product-image/product-image.component';

@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductItemComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductImageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ],
  entryComponents: [
    ProductEditComponent
  ]

})
export class ProductsModule {
}
