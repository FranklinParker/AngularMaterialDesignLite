import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductItemComponent } from './components/product-home/product-item/product-item.component';

@NgModule({
  declarations: [ProductHomeComponent, ProductItemComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
