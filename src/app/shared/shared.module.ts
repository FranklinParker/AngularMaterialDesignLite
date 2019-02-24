import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MdlModule} from '@angular-mdl/core';
import {MdlSelectModule} from '@angular-mdl/select';
import {MdlPopoverModule} from '@angular-mdl/popover';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorComponent,
    ReactiveFormsModule,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule
  ]
})
export class SharedModule { }
