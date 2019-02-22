import { Component, OnInit } from '@angular/core';
import {MdlDialogReference} from '@angular-mdl/core';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  constructor(private dialog: MdlDialogReference) { }

  ngOnInit() {
  }
  onSave() {
    this.dialog.hide();
  }

}
