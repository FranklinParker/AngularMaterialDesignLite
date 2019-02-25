import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MdlModule} from '@angular-mdl/core';
import {MdlSelectModule} from '@angular-mdl/select';
import {MdlPopoverModule} from '@angular-mdl/popover';
import { HeaderComponent } from './components/header/header.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MessageModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MessageModalComponent,
    ReactiveFormsModule,
    MdlModule,
    MdlSelectModule,
    MdlPopoverModule
  ],
  entryComponents: [
    MessageModalComponent
  ]
})
export class SharedModule { }
