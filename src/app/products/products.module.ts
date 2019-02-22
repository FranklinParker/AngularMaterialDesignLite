import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductHomeComponent} from './components/product-home/product-home.component';
import {ProductItemComponent} from './components/product-home/product-item/product-item.component';
import {ProductEditComponent} from './components/product-home/product-edit/product-edit.component';
import {MdlModule} from '@angular-mdl/core';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductHomeComponent,
    ProductItemComponent,
    ProductEditComponent
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
