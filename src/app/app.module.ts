import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdlModule} from '@angular-mdl/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent} from './components/home/home.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { EditItemComponent } from './components/edit-item/edit-item.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    EditItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdlModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
