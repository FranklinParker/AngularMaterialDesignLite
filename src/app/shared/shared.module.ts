import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MdlModule} from '@angular-mdl/core';
import {MdlSelectModule} from '@angular-mdl/select';
import {MdlPopoverModule} from '@angular-mdl/popover';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ReactiveFormsModule,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule
  ]
})
export class SharedModule { }
