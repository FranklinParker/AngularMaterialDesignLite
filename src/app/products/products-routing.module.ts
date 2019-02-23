import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductHomeComponent} from './components/product-home/product-home.component';
import {AuthGuard} from '../auth/services/auth.guard';
import {ProductAddComponent} from './components/product-home/product-add/product-add.component';

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list',
    component: ProductHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'list/:newProduct',
    component: ProductHomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'add',
    component: ProductAddComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
