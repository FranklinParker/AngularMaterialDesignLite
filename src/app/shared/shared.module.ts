import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MdlModule} from '@angular-mdl/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    MdlModule
  ]
})
export class SharedModule { }
