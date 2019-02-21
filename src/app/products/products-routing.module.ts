import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductHomeComponent} from './components/product-home/product-home.component';
import {AuthGuard} from '../auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: ProductHomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
