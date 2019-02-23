import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './auth/components/login.component';
import {LoggedInGuard} from './auth/services/logged-in.guard';

const routes: Routes = [

  {
    path: 'product',
    loadChildren: './products/products.module#ProductsModule'
  },
  {
    path: '',
    component: LoginComponent,
    canActivate: [LoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
